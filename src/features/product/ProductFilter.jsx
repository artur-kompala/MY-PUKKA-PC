import { t } from "i18next";
import Filter from "../../ui/Filter"

function ProductFilter() {
    return (
        <Filter
          filterField="last"
          options={[
            { value: "7", label: t("Last 7 days") },
            { value: "30", label: t("Last 30 days") },
            { value: "90", label: t("Last 90 days") },
          ]}
        />
      );
}

export default ProductFilter
