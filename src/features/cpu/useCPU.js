import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCPU } from "../../services/apiCPU";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useCPU() {
  
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
const filterKeys = [
  "manufactures", "graphic", "smt",
  "coreCountMin", "coreCountMax",
  "coreClockMin", "coreClockMax",
  "boostClockMin", "boostClockMax",
  "tdpMin", "tdpMax",
  "priceMin", "priceMax",
  "scoreMin", "scoreMax"
];

const filter = filterKeys.map(key => ({
  field: key,
  value: searchParams.get(key)
}));

  // SORT
  const sortBy = searchParams.get("sortBy") || "rank-desc";
 
  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  
  // QUERY
  const {   
    isLoading,
    data: cpuInfo = {data: {}},
    error,
  } = useQuery({
    queryKey: ["cpus", filter, sortBy, page],
    queryFn: () => getCPU({filter, sortBy, page}),
  });
  const cpus = cpuInfo.data.data 
  const count = cpuInfo.data.total 

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
  

  return { isLoading, error, cpus, count};
}
