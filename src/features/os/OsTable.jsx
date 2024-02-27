import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import { useOs } from "./useOs";
import OsRow from "./OsRow";
import { useTranslation } from "react-i18next";

function OsTable() {
  const { oss, isLoading, count } = useOs();
  const {t} = useTranslation();
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="3.0fr 4.0fr 4.0fr 4.0fr 3.0fr 3.0fr 3.0fr">
        <Table.Header>
          <div></div>
          <div>{t("Manufacturer")}</div>
          <div>{t("name")}</div>
          <div>{t("mode")}</div>
          <div>{t("Max memory")}</div>
          <div>{t("Price")} (PLN)</div>
        </Table.Header>
        {oss.length ? (
          <Table.Body
            data={oss}
            render={(os) => <OsRow key={os._id} os={os} />}
          />
        ) : (
          <TableRow role="row" columns={1}>
            <h3 style={{ alignItems: "center" }}>Os not found</h3>
          </TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default OsTable;
