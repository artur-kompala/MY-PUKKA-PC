import axios from "axios";
import { API_URL } from "../utils/constants";


export async function getProduct({name}){
    let query = await axios.post(`${API_URL}/getProduct`,{ name })
    .then(res=> res.data)
    .catch(error =>{
        throw new Error(error)
    })
    
    return query
}
