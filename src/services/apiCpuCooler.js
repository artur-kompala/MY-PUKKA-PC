import axios from "axios";
import { API_URL } from "../utils/constants";


export async function getCpuCoolers({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/cpuCooler?manufactures=${filter[0].value}&type=${filter[1].value}&socket=${filter[2].value}&priceMin=${filter[3].value}&priceMax=${filter[4].value}&tdpMin=${filter[5].value}&tdpMax=${filter[6].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getOneCpuCooler({name}){
    const data = await axios.get(`${API_URL}/cpuCooler?name=${name}`)
    .then(res=>res.data)
    .catch(err =>{
        console.log(err)
    })
    return data
}