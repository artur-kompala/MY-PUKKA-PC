import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getOs } from "../../services/apiOs";

export function useOs() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterKeys = [
    "max_memory",
    "priceMin",
    "priceMax",
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
    data: ossInfo = { data: {} },
    error,
  } = useQuery({
    queryKey: ["oss", filter, sortBy, page],
    queryFn: () => getOs({ filter, sortBy, page }),
  });
  const oss = ossInfo.data.data;
  const count = ossInfo.data.total;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["oss", filter, sortBy, page + 1],
      queryFn: () => getOs({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["oss", filter, sortBy, page - 1],
      queryFn: () => getOs({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, oss, count };
}
