import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CpuTableoperations() {
    return (
        <TableOperations>
    
          <SortBy
            options={[
              { value: "price-desc", label: "price ⬇️" },
              { value: "rank-desc", label: "rank ⬇️" },
              { value: "core_count-desc", label: "core count ⬇️" },
              { value: "price-asc", label: "price ⬆️" },
              { value: "rank-asc", label: "rank ⬆️" },
              { value: "core_count-asc", label: "core count ⬆️" },
   
            ]}
          />
        </TableOperations>
      );
}

export default CpuTableoperations
