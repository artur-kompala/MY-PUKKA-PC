import axios from "axios";
import { API_URL } from "../utils/constants";


export async function getGpus({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/gpu?manufactures=${filter[0].value}&chipset=${filter[1].value}&pcie=${filter[2].value}&fg=${filter[3].value}&priceMin=${filter[4].value}&priceMax=${filter[5].value}&memoryMin=${filter[6].value}&memoryMax=${filter[7].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getGpuFilters(){
    const data = await axios.get(`${API_URL}/getGpuFilters`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function gpuSuggestion(price,_id,score){
    const data = {
        score: score,
        price: price,
        _id: _id
    }
    const result = await axios.post(`${API_URL}/gpuSuggestion`,data).catch(err=>console.log(err))
    return result
}