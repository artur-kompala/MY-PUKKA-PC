import axios from "axios";
import { API_URL } from "../utils/constants";


export async function getOs({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/os?&max_memory=${filter[0].value}&priceMin=${filter[1].value}&priceMax=${filter[2].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getOneOs({name}){
    const data = await axios.get(`${API_URL}/os?name=${name}`)
    .then(res=>res.data)
    .catch(err =>{
        console.log(err)
    })
    return data
}

export async function getOsFilters(){
    const data = await axios.get(`${API_URL}/getOsFilters`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}