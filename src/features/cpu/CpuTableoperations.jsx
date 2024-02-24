import { useTranslation } from "react-i18next";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CpuTableoperations() {
  const {t} = useTranslation();
    return (
        <TableOperations>
    
          <SortBy
            options={[
              { value: "rank-desc", label: `${t('rank')} 📈` },
              { value: "price-desc", label: `${t('price')}⬇️` },
              { value: "core_count-desc", label: `${t('Core Count')} ⬇️` },
              { value: "rank-asc", label: `${t('rank')} 📉` },
              { value: "price-asc", label: `${t('price')}⬆️` },
              { value: "core_count-asc", label: `${t('Core Count')}⬆️` },
            ]}
          />
        </TableOperations>
      );
}

export default CpuTableoperations
