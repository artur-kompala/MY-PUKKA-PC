import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function MoboTableoperations() {
    return (
        <TableOperations>
    
          <SortBy
            options={[
              { value: "price-desc", label: "price ⬇️" },
              { value: "price-asc", label: "price ⬆️" },
            ]}
          />
        </TableOperations>
      );
}

export default MoboTableoperations
