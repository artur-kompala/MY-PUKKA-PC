import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CartRow from "./CartRow";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function BuilderTable({
  setTotalCost,
  setTotalPower,
  isLoading,
  data,
  refetch,
  counter,
  setCounter
}) {
  const {t,i18n} = useTranslation();
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
  const cart = data[0].cart;
  let calcTotalCost = 0;
  let calcTotalPower = 0;

  useEffect(() => {
   
    if (cart) {
      cart["cpu"] && (calcTotalPower += cart["cpu"].watts_usage);
      console.log(cart["memory"]);
      cart["memory"] && (calcTotalPower += (4 * counter[0]));
      cart["storage"] && (calcTotalPower += 10);
      cart["gpu"] && (calcTotalPower += cart["gpu"].rps);
      cart["mobo"] && (calcTotalPower += 70);
    }
    console.log(calcTotalPower);
    for (const type in cart) {
      calcTotalCost += cart[type].price;
    }
    setTotalPower(calcTotalPower);
    setTotalCost(calcTotalCost);
  }, [
    calcTotalCost,
    calcTotalPower,
    setTotalPower,
    setTotalCost,
    refetch,
    data,
    counter
  ]);

  if (!isLoading) {
    
    

    return (
      <Menus>
        <Table columns="5fr 5fr 5fr 1fr 1fr">
          <Table.Header>
            <div>{t('component')}</div>
            <div>{t('product')}</div>
            <div>{t('quantity')}</div>
            <div>{t('price')}</div>
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
                counter={counter}
                setCounter={setCounter}
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
