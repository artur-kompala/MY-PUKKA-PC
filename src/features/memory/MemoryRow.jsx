import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/apiCart";
import Table from "../../ui/Table";
import Button from "../../ui/Button";

function MemoryRow({memory}) {
    const navigate = useNavigate();
    const {manufacture,name,price,type,speed,module,capacity,led,color,tense,delays,gid} = memory;

    function handleClick(type,data){
        addCart(type,data).then(navigate('/builder'))
    }

    return (
        <Table.Row>
            <img style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px',width: '10rem',height: '7rem'}}src={`${manufacture}.svg`} alt={manufacture}></img>
            <span onClick={()=>navigate(`/product/${gid}`)}>{name}</span>
            <div>{type}</div>
            <div>{speed}</div>
            <div>{`${capacity}GB`}</div>
            <div>{led? "Yes" : "No"}</div>
            <div style={{backgroundColor: color,borderStyle: 'solid', borderColor: '#4338ca', borderWidth: '2px',borderRadius: '1rem',width: "3rem",height: "3rem"}}>&nbsp;</div>
            <div>{`${tense}V`}</div>
            <div>{`${delays} CL`}</div>
            <div>{price ? `${price}`: "-"}</div>
            <Button size='small' onClick={()=>handleClick("memory",memory)}>+Add to Build</Button>

        </Table.Row>
    )
}

export default MemoryRow
