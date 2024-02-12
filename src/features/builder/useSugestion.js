import { useTranslation } from "react-i18next";

export function useSugestion(cart,totalPower){
    const {t,i18n} = useTranslation();
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
    
    
    
    
    
    
    
    

    return sugestion
}