import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CpuCoolerRow from "./CpuCoolerRow";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useCpuCooler } from "./useCpuCooler";
import { useTranslation } from "react-i18next";

function CpuCoolerTable() {
  const { coolers, isLoading, count } = useCpuCooler();
  const {t} = useTranslation();
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="1.5fr 1.5fr 1.4fr 1.5fr 1.2fr 1.3fr 1.2fr 1.4fr 1.5fr 1.5fr">
        <Table.Header>
          <div></div>
          <div>{t("name")}</div>
          <div>{t("RPM")}</div>
          <div>{t("noise_level")}</div>
          <div>{t("Type")}</div>
          <div>{t("TDP")}</div>
          <div>{t("led")}</div>
          <div>{t("color")}</div>
          <div>{t("Price")}(PLN)</div>
        </Table.Header>
        {coolers.length ? (
          <Table.Body
            data={coolers}
            render={(cooler) => <CpuCoolerRow key={cooler._id} cooler={cooler} />}
          />
        ) : (
          <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Processor Coolers not found</h3></TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CpuCoolerTable
