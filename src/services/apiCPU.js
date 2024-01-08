import { PAGE_SIZE } from "../utils/constants";
import axios from "axios";
const url = "http://localhost:5000";


export async function getCPU({filter, sortBy, page}){
  
    let query = await axios.get(`${url}/cpu?page=${page}&sortBy=${sortBy}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    return query
}