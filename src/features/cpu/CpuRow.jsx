import Table from "../../ui/Table";
import { SiAmd,SiIntel  } from "react-icons/si";
import Button from "../../ui/Button"
import { addCart } from "../../services/apiCart";
import { useNavigate } from "react-router-dom";

function checkManufacture(name){
    if (name.includes("AMD")) {
        return <SiAmd size='40'color="#ef0707"/>
    } else if (name.includes("Intel")) {
        return <SiIntel size='40'color='#0068B5'/>
    } else {
        return "Nieznany producent";
    }
}



function CpuRow({cpu}) {
    const navigate = useNavigate();
    const {name,boost_clock,price,core_clock,core_count,graphics,smt,tdp,rank,benchmark,manufacture} = cpu;

    function handleClick(type,data){
        addCart(type,data)
        navigate('/builder')
    }
    

    
    return (
        <Table.Row>
            {checkManufacture(manufacture)}
            <span>{rank || "-"}</span>
            <span onClick={()=>navigate(`/product/${ manufacture + ' '+ name}`)}>{name}</span>
            <div>{core_count}</div>
            <div>{core_clock}</div>
            <div>{boost_clock}</div>
            <div>{graphics || "-"}</div>
            <div>{tdp}</div>
            <div>{smt ? "Yes" : "No"}</div>
            <div>{price || "-"}</div>
            <span>{benchmark || "-"}</span>
            <div>
                <Button size='small' onClick={()=>handleClick("CPU",cpu)}>+Add to Build</Button>
            </div>
        </Table.Row>
    )
}

export default CpuRow
