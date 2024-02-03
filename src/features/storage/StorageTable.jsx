import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import StorageRow from "./StorageRow";
import { useStorage } from "./useStorage";
import Pagination from "../../ui/Pagination";

function StorageTable() {
    const { storages, isLoading, count } = useStorage();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.8fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr  0.5fr 8rem">
        <Table.Header>
          <div></div>
          <div>Rank</div>
          <div>Name</div>
          <div>Capacity</div>
          <div>Type</div>
          <div>Cache</div>
          <div>Form factor</div>
          <div>Read</div>
          <div>Write</div>
          <div>Score</div>
          <div>Price (PLN)</div>
        </Table.Header>
        {storages.length ? (
          <Table.Body
            data={storages}
            render={(storage) => <StorageRow key={storage._id} storage={storage} />}
          />
        ) : (
          <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Storage not found</h3></TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default StorageTable
