import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCPU } from "../../services/apiCPU";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useCPU() {
  /*
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  */
  // QUERY
  const {
    isLoading,
    data: cpus = {},
    count = 1,
    error,
  } = useQuery({
    queryKey: ["cpus"],
    queryFn: () => getCPU(),
  });
  /*
  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["cpus", filter, sortBy, page + 1],
      queryFn: () => getCPU({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["cpus", filter, sortBy, page - 1],
      queryFn: () => getCPU({ filter, sortBy, page: page - 1 }),
    });
  */

  return { isLoading, error, cpus, count };
}
