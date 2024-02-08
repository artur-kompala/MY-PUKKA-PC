import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/apiCart";
import { FaWindows } from "react-icons/fa";
import Table from "../../ui/Table";
import Button from "../../ui/Button";

function OsRow({os}) {
    const navigate = useNavigate();
    const {manufacture,name,price,gid,max_memory,mode} = os;

    function handleClick(type,data){
        addCart(type,data).then(navigate('/builder'))
    }

    return (
        <Table.Row>
            {manufacture === "Microsoft" ? <FaWindows size={60}/> : "-"}
            <div>{manufacture}</div>
            <span onClick={()=>navigate(`/product/${gid}`)}>{name}</span>
            <div>{mode}</div>
            <div>{max_memory}</div>
            <div>{price ? `${price}`: "-"}</div>
            <div>
                <Button size='small' onClick={()=>handleClick("os",os)}>+Add to Build</Button>
            </div>
        </Table.Row>
    )
}

export default OsRow
