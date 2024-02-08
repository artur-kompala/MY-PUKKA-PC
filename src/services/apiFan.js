import axios from "axios";
import { API_URL } from "../utils/constants";

const filterKeys = [
    "manufactures",
    "size",
    "priceMin",
    "priceMax",
    "noiseMin",
    "noiseMax",
    "flowMin",
    "flowMax",
  ];

export async function getFans({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/fan?manufactures=${filter[0].value}&size=${filter[1].value}&priceMin=${filter[2].value}&priceMax=${filter[3].value}&noiseMin=${filter[4].value}&noiseMax=${filter[5].value}&flowMin=${filter[6].value}&flowMax=${filter[7].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getFan({name}){
    const data = await axios.get(`${API_URL}/fan?name=${name}`)
    .then(res=>res.data)
    .catch(err =>{
        console.log(err)
    })
    return data
}

export async function getFanFilters(){
    const data = await axios.get(`${API_URL}/getFanFilters`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

