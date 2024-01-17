import { PAGE_SIZE } from "../utils/constants";
import axios from "axios";
const url = "http://localhost:5000";


export async function getCPU({filter, sortBy, page}){
    let query = await axios.get(`${url}/cpu?manufactures=${filter[0].value}&graphic=${filter[1].value}&smt=${filter[2].value}&coreCountMin=${filter[3].value}&coreCountMax=${filter[4].value}&coreClockMin=${filter[5].value}&coreClockMax=${filter[6].value}&boostClockMin=${filter[7].value}&boostClockMax=${filter[8].value}&tdpMin=${filter[9].value}&tdpMax=${filter[10].value}&priceMin=${filter[11].value}&priceMax=${filter[12].value}&scoreMin=${filter[13].value}&scoreMax=${filter[14].value}1&sortBy=${sortBy}&page=${page}`)
    .then(res=> res.data)
    .catch(err =>{
        console.log(err)
    })
    
    return query
}