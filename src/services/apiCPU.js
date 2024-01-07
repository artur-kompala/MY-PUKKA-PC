import { PAGE_SIZE } from "../utils/constants";
import axios from "axios";
const url = "http://localhost:5000";


export async function getCPU({filter, sortBy, page}){
   
    let query = await axios.get(`${url}/cpu?page=${page}&sortBy=${sortBy}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
   

    const sortField = sortBy.field;
    const sortDirection = sortBy.direction === 'desc' ? -1 : 1;

    if (sortField === 'price' || sortField === 'Benchmark' || sortField === 'Rank' || sortField === 'core_count') {
    query = query.sort((a, b) => (b[sortField] - a[sortField]) * sortDirection);
    }
      
   
    

    return query
}