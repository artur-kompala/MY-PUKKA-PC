import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getPsu } from "../../services/apiPsu";


export function usePsu() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterKeys = [
    "manufactures",
    "type",
    "efficiency",
    "priceMin",
    "priceMax",
    "wattageMin",
    "wattageMax",
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
    data: psuInfo = { data: {} },
    error,
  } = useQuery({
    queryKey: ["psus", filter, sortBy, page],
    queryFn: () => getPsu({ filter, sortBy, page }),
  });
  const psus = psuInfo.data.data;
  const count = psuInfo.data.total;

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["psus", filter, sortBy, page + 1],
      queryFn: () => getPsu({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["psus", filter, sortBy, page - 1],
      queryFn: () => getPsu({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, psus, count };
}
