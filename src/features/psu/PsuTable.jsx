import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { usePsu } from "./usePsu";
import Pagination from "../../ui/Pagination";
import PsuRow from "./PsuRow";
import { useTranslation } from "react-i18next";

function PsuTable() {
  const { psus, isLoading, count } = usePsu();
  const { t } = useTranslation();
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.8fr 1.1fr 1.1fr 1.1fr 1.1fr 1.1fr 1.1fr 1.1fr 1.1fr">
        <Table.Header>
          <div></div>
          <div>{t("name")}</div>
          <div>{t("Type")}</div>
          <div>{t("Efficiency")}</div>
          <div>{t("wattage")}</div>
          <div>{t("modular")}</div>
          <div>{t("color")}</div>
          <div>{t("price")} (PLN)</div>
        </Table.Header>
        {psus.length ? (
          <Table.Body
            data={psus}
            render={(psu) => <PsuRow key={psu._id} psu={psu} />}
          />
        ) : (
          <TableRow role="row" columns={1}>
            <h3 style={{ alignItems: "center" }}>Power supply not found</h3>
          </TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PsuTable;
