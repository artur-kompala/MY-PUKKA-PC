import axios from "axios";
import { API_URL } from "../utils/constants";

export async function getMemory({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/memory?manufactures=${filter[0].value}&type=${filter[1].value}&priceMin=${filter[2].value}&priceMax=${filter[3].value}&speedMin=${filter[4].value}&speedMax=${filter[5].value}&capacityMin=${filter[6].value}&capacityMax=${filter[7].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getMemoryFilters(){
    const data = await axios.get(`${API_URL}/getMemoryFilters`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}