import axios from "axios";
import { API_URL } from "../utils/constants";
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

export async function getStorages({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/storage?manufactures=${filter[0].value}&type=${filter[1].value}&inter=${filter[2].value}&readMin=${filter[3].value}&readMax=${filter[4].value}&writeMin=${filter[5].value}&writeMax=${filter[6].value}&capacityMin=${filter[7].value}&capacityMax=${filter[8].value}&priceMin=${filter[9].value}&priceMax=${filter[10].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getOneStorage({name}){
    const data = await axios.get(`${API_URL}/storage?name=${name}`)
    .then(res=>res.data)
    .catch(err =>{
        console.log(err)
    })
    return data
}

export async function getStorageFilters(){
    const data = await axios.get(`${API_URL}/getStorageFilters`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}