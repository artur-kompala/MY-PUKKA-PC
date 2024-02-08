import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/apiCart";
import Table from "../../ui/Table";
import Button from "../../ui/Button";

function FanRow({fan}) {
    const navigate = useNavigate();
    const {name,manufacture,color,price,size,noise,led,rpm,flow,gid} = fan;

    function handleClick(type,data){
        addCart(type,data)
        navigate('/builder')
    }

    return (
        <Table.Row>
            <img style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px',width: '10rem',height: '7rem'}}src={`${manufacture}.svg`} alt={manufacture}></img>
            <span onClick={()=>navigate(`/product/${ manufacture + ' '+ name}`)}>{name}</span>
            <div>{size}</div>
            <div>{`${noise} dB`}</div>
            <div>{led? "Yes" : "No"}</div>
            <div>{rpm}</div>
            <div>{flow} CFM</div>
            <div  style={{backgroundColor: color,borderStyle: 'solid', borderColor: '#4338ca', borderWidth: '2px',borderRadius: '1rem',width: "3rem",height: "3rem"}}>&nbsp;</div>
            <div>{price ? `${price}`: "-"}</div>
            <div>
                <Button size='small' onClick={()=>handleClick("Case fan",fan)}>+Add to Build</Button>
            </div>
        </Table.Row>
    )
}

export default FanRow
