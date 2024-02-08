export function useCompatibility(cart,totalPower){
    const {cpu,cooler,mobo,gpu,memory,psu,cas,fan,storage,os} = cart
    
    const issues = []

    if (cart.psu?.wattage && totalPower >= cart.psu.wattage) {
        issues.push({component: 'Power supply', desc: "The power supply's wattage is insufficient for the system's power consumption."});
    }
    

    return issues
}