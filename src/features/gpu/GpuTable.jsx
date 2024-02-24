import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import GpuRow from "./GpuRow";
import Pagination from "../../ui/Pagination";
import { useGpu } from "./useGpu";
import { t } from "i18next";

function GpuTable() {
    const { gpus, isLoading, count } = useGpu();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.8fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr  0.5fr  0.5fr  0.5fr  0.5fr 8rem">
        <Table.Header>
          <div></div>
          <div>{t("Rank")}</div>
          <div>Chipset</div>
          <div>{t("name")}</div>
          <div>{t("memory")}</div>
          <div>{t("Core Clock")}</div>
          <div>{t("Boost Clock")}</div>
          <div>{t("length")}</div>
          <div>PCIe</div>
          <div>{t("psu")}</div>
          <div>{t("rt")}</div>
          <div>{t("Frame Genertor")}</div>
          <div>{t("Score")}</div>
          <div>{t("Price")} (PLN)</div>
        </Table.Header>
        {gpus.length ? (
          <Table.Body
            data={gpus}
            render={(gpu) => <GpuRow key={gpu._id} gpu={gpu} />}
          />
        ) : (
          <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Graphic cards not found</h3></TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default GpuTable
