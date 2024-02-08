import axios from "axios";
import { API_URL } from "../utils/constants";

export async function getCases({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/case?manufactures=${filter[0].value}&type=${filter[1].value}&form_factor=${filter[2].value}&priceMin=${filter[3].value}&priceMax=${filter[4].value}&gpu_lengthMin=${filter[5].value}&gpu_lengthMax=${filter[6].value}&cpu_cooler_lengthMin=${filter[7].value}&cpu_cooler_lengthMax=${filter[8].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getCaseFilters(){
    const data = await axios.get(`${API_URL}/getCaseFilters`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}