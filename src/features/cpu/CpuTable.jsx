import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import CpuRow from "./CpuRow";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useCPU } from "./useCPU";
import { TableRow } from "@mui/material";
import { useTranslation } from "react-i18next";

function CpuTable() {
  const { cpus, isLoading, count,error} = useCPU();
  const {t} = useTranslation();
  if (isLoading) return <Spinner />;
  if(error) return <h1>Brak połączenia</h1>

  return (
    <Menus>
      <Table columns="1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.8fr 1.5fr 1.5fr">
        <Table.Header>
          <div></div>
          <div>{t('Rank')}</div>
          <div>{t('name')}</div>
          <div>{t('Core Count')}</div>
          <div>{t('Core Clock')}</div>
          <div>{t('Boost Clock')}</div>
          <div>{t('Graphic')}</div>
          <div>TDP</div>
          <div>SMT</div>
          <div>{t('Price')}(PLN)</div>
          <div>{t('Score')}</div>
        </Table.Header>
        {cpus.length ? (
          <Table.Body
            data={cpus}
            render={(cpu) => <CpuRow key={cpu._id} cpu={cpu} />}
          />
        ) : (
          <TableRow role="row" columns={1}><h3 style={{alignItems: "center"}}>Cpu not found</h3></TableRow>
        )}

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CpuTable;
