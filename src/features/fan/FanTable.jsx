import { TableRow } from "@mui/material";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import FanRow from "./FanRow";
import { useFan } from "./useFan";
import Pagination from "../../ui/Pagination";
import { useTranslation } from "react-i18next";

function FanTable() {
    const { fans, isLoading, count } = useFan();
    const {t} = useTranslation();
    if (isLoading) return <Spinner />;
  
    return (
      <Menus>
        <Table columns="1.5fr 1.5fr 1.4fr 1.5fr 1.2fr 1.3fr 1.2fr 1.4fr 1.5fr 1.5fr">
          <Table.Header>
            <div></div>
            <div>{t("name")}</div>
            <div>{t("Size")}</div>
            <div>{t("noise_level")}</div>
            <div>{t("led")}</div>
            <div>RPM</div>
            <div>{t("Flow")}</div>
            <div>{t("color")}</div>
            <div>{t("Price")} (PLN)</div>
          </Table.Header>
          {fans.length ? (
            <Table.Body
              data={fans}
              render={(fan) => <FanRow key={fan._id} fan={fan} />}
            />
          ) : (
            <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Fans not found</h3></TableRow>
          )}
  
          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </Menus>
    );
}

export default FanTable
