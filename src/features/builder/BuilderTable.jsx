import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CartRow from "./CartRow";
import Spinner from "../../ui/Spinner";

function BuilderTable() {
    const list = ["CPU","CPU-Cooler","Montherboard","GPU","RAM","Power Supply","Case","Case fan","Storage","OS"]
  const {   
    isLoading,
    data,
    error,
  } = useQuery({
    queryFn: () => getCart(),
  });
 if(!isLoading){
    const cart = data[0].cart
    return (
      <Menus>
        <Table columns="0.2fr 0.5fr 0.1fr 8rem">
          <Table.Header>
            <div>Component</div>
            <div>Product</div>
            <div>Price</div>
          </Table.Header>
  
          <Table.Body
            data={list}
            render={(list) => <CartRow list={list} cart={cart} isLoading={isLoading}/>}
          />
        </Table>
      </Menus>
    );
 }else{
  return <Spinner></Spinner>
 }
  

  
  
}

export default BuilderTable;
