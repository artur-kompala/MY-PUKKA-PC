import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getCpuCoolers } from "../../services/apiCpuCooler";

export function useCpuCooler() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterKeys = [
    "manufactures",
    "type",
    "socket",
    "priceMin",
    "priceMax",
    "tdpMin",
    "tdpMax",
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
    data: cpuCoolersInfo = { data: {} },
    error,
  } = useQuery({
    queryKey: ["coolers", filter, sortBy, page],
    queryFn: () => getCpuCoolers({ filter, sortBy, page }),
  });
  const coolers = cpuCoolersInfo.data.data;
  const count = cpuCoolersInfo.data.total;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["coolers", filter, sortBy, page + 1],
      queryFn: () => getCpuCoolers({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["coolers", filter, sortBy, page - 1],
      queryFn: () => getCpuCoolers({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, coolers, count };
}
