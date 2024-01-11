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
  const filterManufactures = searchParams.get("manufactures");
  const filtergraphic = searchParams.get("graphic");
  const filtersmt = searchParams.get("smt");

  const filtercoreCountMin = searchParams.get("coreCountMin");
  const filtercoreCountMax = searchParams.get("coreCountMax");

  const filtercoreClockMin = searchParams.get("coreClockMin");
  const filtercoreClockMax = searchParams.get("coreClockMax");

  const filterboostClockMin = searchParams.get("boostClockMin");
  const filterboostClockMax = searchParams.get("boostClockMax");

  const filtertdpMin = searchParams.get("tdpMin");
  const filtertdpMax = searchParams.get("tdpMax");

  const filterpriceMin= searchParams.get("priceMin");
  const filterpriceMax = searchParams.get("priceMax");

  const filterscoreMin= searchParams.get("scoreMin");
  const filterscoreMax = searchParams.get("scoreMax");


  const filter = [
    { field: "manufactures", value: filterManufactures},
    {field: "graphic", value: filtergraphic},
    {field: "smt", value: filtersmt},

    {field: "core_count_Min", value: filtercoreCountMin},
    {field: "core_count_Max", value: filtercoreCountMax},

    {field: "core_clock_Min", value: filtercoreClockMin},
    {field: "core_clock_Max", value: filtercoreClockMax},

    {field: "boost_Clock_Min", value: filterboostClockMin},
    {field: "boost_Clock_Max", value: filterboostClockMax},

    {field: "tdp_Min", value: filtertdpMin},
    {field: "tdp_Max", value: filtertdpMax},

    {field: "priceMin", value: filterpriceMin},
    {field: "priceMax", value: filterpriceMax},

    {field: "score_Min", value: filterscoreMin},
    {field: "score_Max", value: filterscoreMax},
    

  
  ] 
  
  

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
