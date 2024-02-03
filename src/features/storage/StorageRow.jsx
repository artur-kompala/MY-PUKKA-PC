import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { addCart } from "../../services/apiCart";
import Table from "../../ui/Table";

function StorageRow({storage}) {
    const navigate = useNavigate();
    const {name,price,manufacture,score,capacity,type,cache,form_factor,read,write,gid,rank} = storage;

    function handleClick(type,data){
        addCart(type,data)
        navigate('/builder')
    }

    return (
        <Table.Row>
            <img style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px',width: '10rem',height: '7rem'}}src={`${manufacture}.svg`} alt={manufacture}></img>
            <div>{rank}</div>
            <span onClick={()=>navigate(`/product/${ manufacture + ' '+ name}`)}>{name}</span>
            <div>{`${capacity}GB`}</div>
            <div>{type}</div>
            <div>{cache}</div>
            <div>{form_factor}</div>
            <div>{read}</div>
            <div>{write}</div>
            <div>{score}</div>
            <div>{price ? `${price}`: "-"}</div>
            <div>
                <Button size='small' onClick={()=>handleClick("Storage",storage)}>+Add to Build</Button>
            </div>
        </Table.Row>
    )
}

export default StorageRow
