import axios from "axios";
import { API_URL } from "../utils/constants";

export async function getPsu({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/psu?manufactures=${filter[0].value}&type=${filter[1].value}&efficiency=${filter[2].value}&priceMin=${filter[3].value}&priceMax=${filter[4].value}&wattageMin=${filter[5].value}&wattageMax=${filter[6].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getOnePsu({name}){
    const data = await axios.get(`${API_URL}/cpuCooler?name=${name}`)
    .then(res=>res.data)
    .catch(err =>{
        console.log(err)
    })
    return data
}

export async function getPsuFilters(){
    const data = await axios.get(`${API_URL}/getPsuFilters`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

