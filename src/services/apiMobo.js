import axios from "axios";
import { API_URL } from "../utils/constants";


export async function getMobos({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/mobo?manufactures=${filter[0].value}&socket=${filter[1].value}&form_factor=${filter[2].value}&priceMin=${filter[3].value}&priceMax=${filter[4].value}&wifi=${filter[5].value}&chipset=${filter[6].value}&integrated_graphics_support=${filter[7].value}&memory_type=${filter[8].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getOneCpuCooler({name}){
    const data = await axios.get(`${API_URL}/mobo?name=${name}`)
    .then(res=>res.data)
    .catch(err =>{
        console.log(err)
    })
    return data
}