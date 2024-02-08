import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useMemory } from "./useMemory";
import MemoryRow from "./MemoryRow";

function MemoryTable() {
    const { memories, isLoading, count } = useMemory();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="1.5fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Type</div>
          <div>Speed</div>
          <div>Capacity</div>
          <div>Led</div>
          <div>Color</div>
          <div>Tense</div>
          <div>Delays</div>
          <div>Price (PLN)</div>
        </Table.Header>
        {memories.length ? (
          <Table.Body
            data={memories}
            render={(memory) => <MemoryRow key={memory._id} memory={memory} />}
          />
        ) : (
          <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Memory not found</h3></TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default MemoryTable
