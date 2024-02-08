import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CaseRow from "./CaseRow";
import Pagination from "../../ui/Pagination";
import { useCase } from "./useCase";

function CaseTable() {
    const { cases, isLoading, count } = useCase();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.5fr 0.5fr 0.4fr 0.5fr 0.2fr 0.3fr 0.2fr 0.4fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 8rem">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Type</div>
          <div>Form factor</div>
          <div>Psu</div>
          <div>Side panel</div>
          <div>External volume (L)</div>
          <div>3.5 bays</div>
          <div>GPU lenght (mm)</div>
          <div>CPU cooler lenght (mm)</div>
          <div>Fan (mm)</div>
          <div>Color</div>
          <div>Price (PLN)</div>
        </Table.Header>
        {cases.length ? (
          <Table.Body
            data={cases}
            render={(cas) => <CaseRow key={cas._id} cas={cas} />}
          />
        ) : (
          <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Case not found</h3></TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CaseTable
