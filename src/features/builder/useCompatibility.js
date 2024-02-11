import { useTranslation } from "react-i18next";

export function useCompatibility(cart,totalPower){
    const {t,i18n} = useTranslation();
    const issues = []
    if(!cart?.cart) return issues

   
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
    
    
    if (psu?.wattage && totalPower >= psu?.wattage) {
        issues.push({component: t('psu'), desc: t('powerInsufficient')});
    }
    if(cpu?.socket && mobo?.socket && cpu?.socket !== mobo?.socket){
        issues.push({component: t('mobo'),desc: t('socketIssues')})
    }
    if (cpu?.socket && cooler?.socket) {
        if (!cooler.socket.some(socket => socket === cpu.socket)) {
            issues.push({component: t('cpu-cooler'), desc: t('socketCoolerIssues')});
        }
    }
    if(cpu?.tdp && cooler?.tdp && cpu?.tdp > cooler?.tdp){
        issues.push({component: t('cpu-cooler'), desc: t('tdpCoolerIssues')});
    }
    if(mobo?.chipset && cpu?.chipset){
        if(!cpu.chipset.includes(mobo.chipset)){
            issues.push({component: t('mobo'), desc: t('chipsetIssues')})
        }
    }
    if(cooler?.height && cas?.cpu_cooler_length && cooler?.height > cas.cpu_cooler_length){
        issues.push({component: t('cpu-cooler'), desc: t('coolerLengthIssues')})
    }
    if(gpu?.['length'] && cas?.gpu_length && gpu?.['length'] > cas?.gpu_length){
        issues.push({component: t('gpu'), desc: t('gpuLengthIssues')})
    }
    if(mobo?.form_factor && cas?.form_factor){
        if(!cas?.form_factor.includes(mobo?.form_factor)){
            issues.push({component: t('case'),desc: t('caseFormFactorIssues')})
        }
    }
    if(memory?.type && mobo?.memory_type){
        if(!mobo.memory_type.includes(memory.type)){
            console.log('dupa');
            issues.push({component: t('ram'),desc: t('memoryTypeIssues')})
        }
    }
    if(memory?.speed && mobo?.memory_speed){
        if(mobo.memory_speed[0] <= memory.speed && memory.speed <= mobo.memory_speed[1]){
           //nic
        }else{
            issues.push({component: t('ram'),desc: t('memorySpeedIssues')})
        }
    }
    
    
    
    
    

    return issues
}