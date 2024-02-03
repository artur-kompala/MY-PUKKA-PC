import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import GpuRow from "./GpuRow";
import Pagination from "../../ui/Pagination";
import { useGpu } from "./useGpu";

function GpuTable() {
    const { gpus, isLoading, count } = useGpu();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.8fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr  0.5fr  0.5fr  0.5fr  0.5fr 8rem">
        <Table.Header>
          <div></div>
          <div>Rank</div>
          <div>Chipset</div>
          <div>Name</div>
          <div>Memory</div>
          <div>Core Clock</div>
          <div>Boost Clock</div>
          <div>Length</div>
          <div>PCIe</div>
          <div>Power Supply</div>
          <div>Ray Tracing</div>
          <div>Frame Generator</div>
          <div>Score</div>
          <div>Price (PLN)</div>
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
