import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCPU } from "../../services/apiCPU";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import axios from "axios";
const url = "http://localhost:5000";

export function useCPU() {
  
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const count = 1353


  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  // SORT
  const sortBy = searchParams.get("sortBy") || "Rank-desc";
 

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  
  // QUERY
  const {   
    isLoading,
    data: cpus = {},
    error,
  } = useQuery({
    queryKey: ["cpus", filter, sortBy, page],
    queryFn: () => getCPU({filter, sortBy, page}),
  });
  
  
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
  

  return { isLoading, error, cpus, count };
}
