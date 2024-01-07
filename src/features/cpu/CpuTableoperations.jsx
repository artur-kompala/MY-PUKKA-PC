import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CpuTableoperations() {
    return (
        <TableOperations>
          <Filter
            filterField="status"
            options={[
              { value: "all", label: "All" },
              { value: "checked-out", label: "Checked out" },
              { value: "checked-in", label: "Checked in" },
              { value: "unconfirmed", label: "Unconfirmed" },
            ]}
          />
    
          <SortBy
            options={[
              { value: "price-desc", label: "Sort by price ⬇️" },
              { value: "price-asc", label: "Sort by price ⬆️" },

              { value: "Benchmark-desc", label: "Sort by score ⬇️" },
              { value: "Benchmark-asc", label: "Sort by score ⬆️" },

              { value: "Rank-desc", label: "Sort by rank ⬇️" },
              { value: "Rank-asc", label: "Sort by rank ⬆️" },

              { value: "core_count-desc", label: "Sort by core count ⬇️" },
              { value: "core_count-asc", label: "Sort by core count ⬆️" },
   
            ]}
          />
        </TableOperations>
      );
}

export default CpuTableoperations
