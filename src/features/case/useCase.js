import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getCases } from "../../services/apiCase";

export function useCase() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterKeys = [
    "manufactures",
    "type",
    "form_factor",
    "priceMin",
    "priceMax",
    "gpu_lengthMin",
    "gpu_lengthMax",
    "cpu_cooler_lengthMin",
    "cpu_cooler_lengthMax",
  ];

  const filter = filterKeys.map((key) => ({
    field: key,
    value: searchParams.get(key),
  }));

  // SORT
  const sortBy = searchParams.get("sortBy") || "price-asc";

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: casesInfo = { data: {} },
    error,
  } = useQuery({
    queryKey: ["cases", filter, sortBy, page],
    queryFn: () => getCases({ filter, sortBy, page }),
  });
  const cases = casesInfo.data.data;
  const count = casesInfo.data.total;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["cases", filter, sortBy, page + 1],
      queryFn: () => getCases({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["cases", filter, sortBy, page - 1],
      queryFn: () => getCases({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, cases, count };
}
