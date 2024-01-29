import axios from "axios";
import { API_URL } from "../utils/constants";


export async function getProduct({name,last}){
    console.log(`${API_URL}/getProduct?name=${ name }&last=${last}`);
    let query = await axios.post(`${API_URL}/getProduct?name=${ name }&last=${last}`)
    .then(res=> res.data)
    .catch(error =>{
        throw new Error(error)
    })
    
    return query
}
