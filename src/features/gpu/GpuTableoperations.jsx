import { useTranslation } from "react-i18next";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function GpuTableoperations() {
  const {t} = useTranslation();
    return (
        <TableOperations>
    
          <SortBy
            options={[
              { value: "price-desc", label: `${t('price')}⬇️` },
              { value: "price-asc", label: `${t('price')}⬆️` },
              { value: "rank-desc", label: "rank 📈" },
              { value: "rank-asc", label: "rank 📉" },
              { value: "memory-desc", label: "memory 📈" },
              { value: "memory-asc", label: "memory 📉" },
            ]}
          />
        </TableOperations>
      );
}

export default GpuTableoperations
