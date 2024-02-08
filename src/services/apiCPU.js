import axios from "axios";
import { API_URL } from "../utils/constants";


export async function getCPU({filter, sortBy, page}){
    const data = await axios.get(`${API_URL}/cpu?manufactures=${filter[0].value}&graphic=${filter[1].value}&smt=${filter[2].value}&coreCountMin=${filter[3].value}&coreCountMax=${filter[4].value}&coreClockMin=${filter[5].value}&coreClockMax=${filter[6].value}&boostClockMin=${filter[7].value}&boostClockMax=${filter[8].value}&tdpMin=${filter[9].value}&tdpMax=${filter[10].value}&priceMin=${filter[11].value}&priceMax=${filter[12].value}&scoreMin=${filter[13].value}&scoreMax=${filter[14].value}&coreFamily=${filter[15].value}&socket=${filter[16].value}&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

export async function getOneCPU({gid}){
   
    const data = await axios.get(`${API_URL}/getOneCpu?gid=${gid}`)
    .then(res=>res.data)
    .catch(err =>{
        console.log(err)
    })
    return data
}

export async function getCpuFilters(){
    const data = await axios.get(`${API_URL}/getCpuFilters`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    const query = {data}
    
    return query
}

