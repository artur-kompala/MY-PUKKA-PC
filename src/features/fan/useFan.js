import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getFans } from "../../services/apiFan";

export function useFan() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterKeys = [
    "manufactures",
    "size",
    "priceMin",
    "priceMax",
    "noiseMin",
    "noiseMax",
    "flowMin",
    "flowMax",
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
    data: fanInfo = { data: {} },
    error,
  } = useQuery({
    queryKey: ["fans", filter, sortBy, page],
    queryFn: () => getFans({ filter, sortBy, page }),
  });
  const fans = fanInfo.data.data;
  const count = fanInfo.data.total;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["fans", filter, sortBy, page + 1],
      queryFn: () => getFans({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["fans", filter, sortBy, page - 1],
      queryFn: () => getFans({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, fans, count };
}
