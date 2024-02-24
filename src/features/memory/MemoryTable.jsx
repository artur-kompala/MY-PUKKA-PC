import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useMemory } from "./useMemory";
import MemoryRow from "./MemoryRow";
import { useTranslation } from "react-i18next";

function MemoryTable() {
  const { memories, isLoading, count } = useMemory();
  const { t } = useTranslation();
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="1.5fr 1.3fr 1.3fr 1.3fr 1.3fr 1.3fr 1.3fr 1.3fr 1.3fr 1.3fr 1.3fr">
        <Table.Header>
          <div></div>
          <div>{t("name")}</div>
          <div>{t("Type")}</div>
          <div>{t("Speed")}</div>
          <div>{t("capacity")}</div>
          <div>{t("led")}</div>
          <div>{t("color")}</div>
          <div>{t("tense")}</div>
          <div>{t("delays")}</div>
          <div>{t("price")} (PLN)</div>
        </Table.Header>
        {memories.length ? (
          <Table.Body
            data={memories}
            render={(memory) => <MemoryRow key={memory._id} memory={memory} />}
          />
        ) : (
          <TableRow role="row" columns={1}>
            <h3 style={{ alignItems: "center" }}>Memory not found</h3>
          </TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default MemoryTable;
