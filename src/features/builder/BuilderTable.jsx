import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CartRow from "./CartRow";

function BuilderTable() {
    const list = ["CPU","CPU-Cooler","Montherboard","GPU","RAM","Power Supply","Case","Case fan","Storage","OS"]
  let cart = []
  const {   
    isLoading,
    data,
    error,
  } = useQuery({
    queryFn: () => getCart(),
  });
 if(!isLoading){
    cart = data[0].cart
 }
  

  
  return (
    <Menus>
      <Table columns="0.5fr 0.5fr 8rem">
        <Table.Header>
          <div>Component</div>
          <div>Product</div>
        </Table.Header>

        <Table.Body
          data={list}
          render={(list) => <CartRow list={list} cart={cart} isLoading={isLoading}/>}
        />
      </Table>
    </Menus>
  );
}

export default BuilderTable;
