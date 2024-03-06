import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getGpus } from "../../services/apiGpu";

export function useGpu() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  // FILTER
  const filterKeys = [
    "manufactures",
    "chipset",
    "pcie",
    "fg",
    "priceMin",
    "priceMax",
    "memoryMin",
    "memoryMax",
    "lengthMin",
    "lengthMax",
  ]
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
    data = {gpus: {},count: {}},
    error,
  } = useQuery({
    queryKey: ["gpus", filter, sortBy, page],
    queryFn: () => getGpus({ filter, sortBy, page }),
  });
  const {gpus, count } = data
  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["gpus", filter, sortBy, page + 1],
      queryFn: () => getGpus({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["gpus", filter, sortBy, page - 1],
      queryFn: () => getGpus({ filter, sortBy, page: page - 1 }),
    });
  return { isLoading, error, gpus, count };
}
