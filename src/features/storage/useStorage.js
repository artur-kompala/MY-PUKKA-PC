import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getStorages } from "../../services/apiStorage";

export function useStorage() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterKeys = [
    "manufactures",
    "type",
    "inter",
    "readMin",
    "readMax",
    "writeMin",
    "writeMax",
    "capacityMin",
    "capacityMax",
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
    data: StorageInfo = { data: {} },
    error,
  } = useQuery({
    queryKey: ["storages", filter, sortBy, page],
    queryFn: () => getStorages({ filter, sortBy, page }),
  });
  const storages = StorageInfo.data.data;
  const count = StorageInfo.data.total;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["storages", filter, sortBy, page + 1],
      queryFn: () => getStorages({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["storages", filter, sortBy, page - 1],
      queryFn: () => getStorages({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, storages, count };
}
