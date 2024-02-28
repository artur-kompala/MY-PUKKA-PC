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
  setCounter,
}) {
  const { t } = useTranslation();
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
      cart["memory"] && (calcTotalPower += 4 * counter[0]);
      cart["storage"] && (calcTotalPower += 10 * counter[2]);
      cart["gpu"] && (calcTotalPower += cart["gpu"].rps);
      cart["mobo"] && (calcTotalPower += 70);
    }
    for (const type in cart) {
     console.log(type);
      if (type === "memory") {
        calcTotalCost += cart[type].price * counter[0];
        continue;
      }
      if (type === "fan") {
        calcTotalCost += cart[type].price * counter[1];
        continue;
      }
      if (type === "storage") {
        calcTotalCost += cart[type].price * counter[2];
        continue;
      } else {
        calcTotalCost += cart[type].price;
      }
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
    counter,
  ]);

  if (!isLoading) {
    return (
      <Menus>
        <Table columns="5fr 5fr 5fr 1fr 1fr">
          <Table.Header>
            <div>{t("component")}</div>
            <div>{t("product")}</div>
            <div>{t("quantity")}</div>
            <div>{t("price")}</div>
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
