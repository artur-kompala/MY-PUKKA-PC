import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CpuCoolerRow from "./CpuCoolerRow";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useCpuCooler } from "./useCpuCooler";

function CpuCoolerTable() {
  const { coolers, isLoading, count } = useCpuCooler();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.5fr 0.5fr 0.4fr 0.5fr 0.2fr 0.3fr 0.2fr 0.4fr 0.5fr 8rem">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>RPM</div>
          <div>Noise level</div>
          <div>Type</div>
          <div>TDP</div>
          <div>Led</div>
          <div>Color</div>
          <div>Price (PLN)</div>
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
