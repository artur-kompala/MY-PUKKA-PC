import { PAGE_SIZE } from "../utils/constants";
import axios from "axios";
const url = "http://localhost:5000";


export async function getCPU(){
    let query = await axios.get(`${url}/cpu`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    return query
}