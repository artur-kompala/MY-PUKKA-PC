import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import MoboRow from "./MoboRow";
import Pagination from "../../ui/Pagination";
import { useMobo } from "./useMobo.js"
import { useTranslation } from "react-i18next";


function MoboTable() {
  const { mobos, isLoading, count } = useMobo()
  const {t} = useTranslation();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="3.0fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr">
        <Table.Header>
          <div></div>
          <div>{t("name")}</div>
          <div>{t("socket")}</div>
          <div>{t("form_factor")}</div>
          <div>{t("memory_slots")}</div>
          <div>{t("memory_type")}</div>
          <div>{t("memory_speed")}</div>
          <div>Chipset</div>
          <div>{t("graphics support")}</div>
          <div>Pcie</div>
          <div>M.2 (2280)</div>
          <div>{t("color")}</div>
          <div>{t("price")} (PLN)</div>
        </Table.Header>
        {mobos.length ? (
          <Table.Body
            data={mobos}
            render={(mobo) => <MoboRow key={mobo._id} mobo={mobo} />}
          />
        ) : (
          <TableRow role="row" columns={1}>
            <h3 style={{ alignItems: "center" }}>
              Motherboard not found
            </h3>
          </TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default MoboTable;
