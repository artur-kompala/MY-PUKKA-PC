import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/apiCart";
import Table from "../../ui/Table";
import Button from "../../ui/Button";

function MoboRow({ mobo }) {
  const navigate = useNavigate();
  const {
    manufacture,
    name,
    price,
    socket,
    form_factor,
    max_memory,
    memory_slots,
    color,
    wifi,
    memory_speed,
    memory_type,
    chipset,
    pcie,
    integrated_graphics_support,
    gid,
    m2,
  } = mobo;

  function handleClick(type, data) {
    addCart(type, data);
    navigate("/builder");
  }
  return (
    <Table.Row>
        <img style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px',width: '10rem',height: '7rem'}}src={`${manufacture}.svg`} alt={manufacture}></img>
        <span onClick={()=>navigate(`/product/${ manufacture + ' '+ name}`)}>{name}</span>
        <div>{socket}</div>
        <div>{form_factor}</div>
        <div>{memory_slots}</div>
        <div>{memory_type.map(i=>i)}</div>
        <div>{`${memory_speed[0]}-${memory_speed[1]}`}</div>
        <div>{chipset}</div>
        <div>{integrated_graphics_support? 'Yes' : 'No'}</div>
        <div>{`PCIe ${pcie}.0 gen`}</div>
        <div>{m2 ? 'Yes' : 'No'}</div>
        <div style={{display: 'flex',justifyContent: 'start'}}>
            {color.map(item=>{
                return <div key={item} style={{backgroundColor: item,borderStyle: 'solid', borderColor: '#4338ca', borderWidth: '2px',borderRadius: '1rem',width: "3rem",height: "3rem"}}>&nbsp;</div>
            })}
        </div>
        
        <div>{price ? `${price}`: "-"}</div>
        <div>
            <Button size='small' onClick={()=>handleClick("Montherboard",mobo)}>+Add to Build</Button>
        </div>
    </Table.Row>
)
}

export default MoboRow;
