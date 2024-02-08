import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import FanRow from "./FanRow";
import { useFan } from "./useFan";
import Pagination from "../../ui/Pagination";

function FanTable() {
    const { fans, isLoading, count } = useFan();

    if (isLoading) return <Spinner />;
  
    return (
      <Menus>
        <Table columns="0.5fr 0.5fr 0.4fr 0.5fr 0.2fr 0.3fr 0.2fr 0.4fr 0.5fr 8rem">
          <Table.Header>
            <div></div>
            <div>Name</div>
            <div>Size</div>
            <div>Noise level</div>
            <div>Led</div>
            <div>RPM</div>
            <div>Flow</div>
            <div>Color</div>
            <div>Price (PLN)</div>
          </Table.Header>
          {fans.length ? (
            <Table.Body
              data={fans}
              render={(fan) => <FanRow key={fan._id} fan={fan} />}
            />
          ) : (
            <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Fans not found</h3></TableRow>
          )}
  
          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </Menus>
    );
}

export default FanTable
