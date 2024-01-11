import SortBy from "../../ui/SortBy";
import Search from "../../ui/Search";
import TableOperations from "../../ui/TableOperations";

function CpuTableoperations() {
    return (
        <TableOperations>
          <Search/>
    
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
