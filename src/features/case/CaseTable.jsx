import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CaseRow from "./CaseRow";
import Pagination from "../../ui/Pagination";
import { useCase } from "./useCase";
import { useTranslation } from "react-i18next";

function CaseTable() {
  const { t } = useTranslation();
  const { cases, isLoading, count } = useCase();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.5fr 0.5fr 0.4fr 0.5fr 0.2fr 0.3fr 0.2fr 0.4fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 8rem">
        <Table.Header>
          <div></div>
          <div>{t("name")}</div>
          <div>{t("Type")}</div>
          <div>{t("Form factor")}</div>
          <div>Psu</div>
          <div>{t("Side panel")}</div>
          <div>{t("External volume")} (L)</div>
          <div>{t("3.5 bays")}</div>
          <div>{t("GPU lenght")} (mm)</div>
          <div>{t("CPU cooler lenght")} (mm)</div>
          <div>{t("Fan")} (mm)</div>
          <div>{t("color")}</div>
          <div>{t("Price")} (PLN)</div>
        </Table.Header>
        {cases.length ? (
          <Table.Body
            data={cases}
            render={(cas) => <CaseRow key={cas._id} cas={cas} />}
          />
        ) : (
          <TableRow role="row" columns={1}>
            <h3 style={{ alignItems: "center" }}>Case not found</h3>
          </TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CaseTable;
