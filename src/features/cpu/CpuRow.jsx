import Table from "../../ui/Table";
import { SiAmd,SiIntel  } from "react-icons/si";
import styled from "styled-components";
import Button from "../../ui/Button"




function CpuRow({cpu: {
    name,
    boost_clock,
    core_clock,
    core_count,
    graphics,
    price,
    smt,
    tdp
}}) {

    function checkManufacture(name){
        if (name.includes("AMD")) {
            return <SiAmd size='40'color="#ef0707"/>
        } else if (name.includes("Intel")) {
            return <SiIntel size='40'color='#0068B5'/>
        } else {
            return "Nieznany producent";
        }
    }
 
    return (
        <Table.Row>
            {checkManufacture(name)}
            <span>?</span>
            <span>{name}</span>
            <div>{core_count}</div>
            <div>{core_clock}</div>
            <div>{boost_clock}</div>
            <div>{graphics || "-"}</div>
            <div>{tdp}</div>
            <div>{smt ? "Yes" : "No"}</div>
            <div>{price}</div>
            <span>Score</span>
            <div>
                <Button size='small'>+Add to Build</Button>
            </div>
        </Table.Row>
    )
}

export default CpuRow
