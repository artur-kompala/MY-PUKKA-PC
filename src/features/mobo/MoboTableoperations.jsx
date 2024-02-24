import { useTranslation } from "react-i18next";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function MoboTableoperations() {
  const {t} = useTranslation();
  return (
    <TableOperations>
      <SortBy
        options={[
          { value: "price-desc", label: `${t("price")}⬇️` },
          { value: "price-asc", label: `${t("price")}⬆️` },
        ]}
      />
    </TableOperations>
  );
}

export default MoboTableoperations;
