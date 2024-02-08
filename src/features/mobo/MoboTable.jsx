import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import MoboRow from "./MoboRow";
import Pagination from "../../ui/Pagination";
import { useMobo } from "./useMobo.js"


function MoboTable() {
  const { mobos, isLoading, count } = useMobo()

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="3.0fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Socket</div>
          <div>Form factor</div>
          <div>Memory slots</div>
          <div>Memory type</div>
          <div>Memory speed</div>
          <div>Chipset</div>
          <div>graphics support</div>
          <div>Pcie</div>
          <div>M.2 (2280) slot</div>
          <div>Color</div>
          <div>Price (PLN)</div>
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
