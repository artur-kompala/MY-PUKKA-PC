import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { usePsu } from "./usePsu";
import Pagination from "../../ui/Pagination";
import PsuRow from "./PsuRow";

function PsuTable() {
    const { psus, isLoading, count } = usePsu();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.8fr 0.8fr 0.4fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 8rem">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Type</div>
          <div>Efficiency</div>
          <div>Wattage</div>
          <div>Modular</div>
          <div>Color</div>
          <div>Price (PLN)</div>
        </Table.Header>
        {psus.length ? (
          <Table.Body
            data={psus}
            render={(psu) => <PsuRow key={psu._id} psu={psu} />}
          />
        ) : (
          <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Power supply not found</h3></TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PsuTable
