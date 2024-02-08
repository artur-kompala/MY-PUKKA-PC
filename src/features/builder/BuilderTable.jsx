import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CartRow from "./CartRow";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";

function BuilderTable({
  setTotalCost,
  setTotalPower,
  isLoading,
  data,
  refetch,
}) {
  const list = [
    "cpu",
    "cooler",
    "mobo",
    "gpu",
    "memory",
    "psu",
    "cas",
    "fan",
    "storage",
    "os",
  ];

  let calcTotalCost = 0;
  let calcTotalPower = 0;

  useEffect(() => {
    setTotalPower(calcTotalPower);
    setTotalCost(calcTotalCost);
  }, [
    calcTotalCost,
    calcTotalPower,
    setTotalPower,
    setTotalCost,
    refetch,
    data
  ]);

  if (!isLoading) {
    const cart = data[0].cart;
    if (cart) {
      cart["cpu"] && (calcTotalPower += cart["cpu"].watts_usage);
      cart["ram"] && (calcTotalPower += 3.5);
      cart["storage"] && (calcTotalPower += 10);
      cart["gpu"] && (calcTotalPower += cart["gpu"].rps);
      cart["mobo"] && (calcTotalPower += 70);
    }

    for (const type in cart) {
      calcTotalCost += cart[type].price;
    }

    return (
      <Menus>
        <Table columns="5fr 5fr 5fr 1fr">
          <Table.Header>
            <div>Component</div>
            <div>Product</div>
            <div>Price</div>
          </Table.Header>

          <Table.Body
            data={list}
            render={(list) => (
              <CartRow
                list={list}
                cart={cart}
                isLoading={isLoading}
                key={list}
                refetch={refetch}
              />
            )}
          />
        </Table>
      </Menus>
    );
  } else {
    return <Spinner></Spinner>;
  }
}

export default BuilderTable;
