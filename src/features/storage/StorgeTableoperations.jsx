import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function StorgeTableoperations() {
    return (
        <TableOperations>
    
          <SortBy
            options={[
              { value: "price-desc", label: "price ⬇️" },
              { value: "price-asc", label: "price ⬆️" },
              { value: "rank-desc", label: "rank 📈" },
              { value: "rank-asc", label: "rank 📉" },
            ]}
          />
        </TableOperations>
      );
}

export default StorgeTableoperations
