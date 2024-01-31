import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getMobos } from "../../services/apiMobo";

export function useMobo() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterKeys = [
    "manufactures",
    "socket",
    "form_factor",
    "priceMin",
    "priceMax",
    "wifi",
    "chipset",
    "integrated_graphics_support",
    "memory_type"
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
    data: mobosInfo = { data: {} },
    error,
  } = useQuery({
    queryKey: ["mobos", filter, sortBy, page],
    queryFn: () => getMobos({ filter, sortBy, page }),
  });
  const mobos = mobosInfo.data.data;
  const count = mobosInfo.data.total;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["mobos", filter, sortBy, page + 1],
      queryFn: () => getMobos({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["mobos", filter, sortBy, page - 1],
      queryFn: () => getMobos({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, mobos, count };
}
