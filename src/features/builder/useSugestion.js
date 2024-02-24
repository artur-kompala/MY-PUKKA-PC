import { useTranslation } from "react-i18next";
import { gpuSuggestion } from "../../services/apiGpu";

export function useSugestion(cart,totalPower){
    const {t} = useTranslation();
    const sugestion = []
    
    if(!cart?.cart) return sugestion
    
   
    const {
    cpu = null,
    cooler = null,
    mobo = null,
    gpu = null,
    memory = null,
    psu = null,
    cas = null,
    fan = null,
    storage = null,
    os = null
} = cart.cart;
    if(gpu?.score && gpu?.price && gpu?._id){
        const result = gpuSuggestion(gpu?.price,gpu?._id,gpu?.score,).then(result=> sugestion.push({component: 'Karta',desc: result.data[0].name}))
        
    }
    
    
    
    
    
    
    
    

    return sugestion
}