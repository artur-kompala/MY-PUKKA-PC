import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CpuRow from "./CpuRow";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useCPU } from "./useCPU";
import { TableRow } from "@mui/material";

function CpuTable() {
  const { cpus, isLoading, count } = useCPU();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.8fr  0.5fr 8rem">
        <Table.Header>
          <div></div>
          <div>Rank</div>
          <div>Name</div>
          <div>Core count</div>
          <div>Core clock</div>
          <div>Boost clock</div>
          <div>Graphic</div>
          <div>Tdp</div>
          <div>Smt</div>
          <div>Price (PLN)</div>
          <div>Score</div>
        </Table.Header>
        {cpus.length ? (
          <Table.Body
            data={cpus}
            render={(cpu) => <CpuRow key={cpu._id} cpu={cpu} />}
          />
        ) : (
          <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Cpu not found</h3></TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CpuTable;
