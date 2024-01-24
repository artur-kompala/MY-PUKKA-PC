import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";

function CartRow({cart,list,isLoading}) {
  const navigate = useNavigate();
  function chooseComponent(component) {
    switch (component) {
      case "CPU":
        navigate("/cpu");
        break;
      case "CPU-Cooler":
        navigate("/cpu-cooler");
        break;
      case "Montherboard":
        navigate("/mobo");
        break;
      case "GPU":
        navigate("/gpu");
        break;
      case "RAM":
        navigate("/ram");
        break;
      case "Power Supply":
        navigate("/psu");
        break;
      case "Case":
        navigate("/case");
        break;
      case "Case fan":
        navigate("/case-fan");
        break;
      case "Storage":
        navigate("/storage");
        break;
      case "OS":
        navigate("/os");
        break;
      default:
        break;
    }
  }
  if(isLoading){
    return <Spinner></Spinner>
  }
  
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].type === list) {
        return (
            <Table.Row>
              <div>{list}</div>
              {<div onClick={()=>navigate(`/product/${cart[i].data.manufacture+ " " +cart[i].data.name}`)}>{cart[i].data.name}</div>}
              <div>{cart[i].data.price} PLN</div>
            </Table.Row>
        );
     
    }else{
        return(
            <Table.Row>
                <div>{list}</div>
                <Button onClick={() => chooseComponent(list)}>Choose</Button>
            </Table.Row>
        )
    }
  }
}

export default CartRow;
