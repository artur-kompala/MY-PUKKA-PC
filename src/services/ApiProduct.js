import axios from "axios";
import { API_URL } from "../utils/constants";


export async function getProduct({gid,last}){
    let query = await axios.post(`${API_URL}/getProduct?gid=${ gid }&last=${last}`)
    .then(res=> res.data)
    .catch(error =>{
        throw new Error(error)
    })
    
    return query
}
