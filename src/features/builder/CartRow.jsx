import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { deleteItemCart } from "../../services/apiCart";

function CartRow({cart,list,isLoading,refetch}) {
  const navigate = useNavigate();
  function chooseComponent(component) {
    switch (component) {
      case "cpu":
        navigate("/cpu");
        break;
      case "cooler":
        navigate("/cpu-cooler");
        break;
      case "mobo":
        navigate("/mobo");
        break;
      case "gpu":
        navigate("/gpu");
        break;
      case "memory":
        navigate("/ram");
        break;
      case "psu":
        navigate("/psu");
        break;
      case "cas":
        navigate("/case");
        break;
      case "fan":
        navigate("/case-fan");
        break;
      case "storage":
        navigate("/storage");
        break;
      case "os":
        navigate("/os");
        break;
      default:
        break;
    }
  }
  if(isLoading){
    return <Spinner></Spinner>
  }
  
  for(const type in cart) {  
    if (type === list) {
        
        return (
            <Table.Row>
              <div>{list}</div>
              { 
                type==="GPU"?
                <div onClick={()=>navigate(`/product/${cart[type].manufacture+ " " +cart[type].name}`)}>{cart[type].manufacture+ " " +cart[type].name + " " + cart[type].chipset}</div>:
                <div onClick={()=>navigate(`/product/${cart[type].manufacture+ " " +cart[type].name}`)}>{cart[type].manufacture+ " " +cart[type].name}</div>
                }
              <div>{cart[type].price} PLN</div>
              <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cart[type]._id} />

            <Menus.List id={cart[type]._id}>
              
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                refetch={refetch}
                resourceName={`${list}`}
                onConfirm={() => deleteItemCart(list,refetch)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
            </Table.Row>
        );
    }
  }

  return(
    <Table.Row>
        <div>{list}</div>
        <Button onClick={() => chooseComponent(list)}>Choose</Button>
    </Table.Row>
)
}

export default CartRow;
