import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CpuTableOperations from "../features/cpu/CpuTableoperations";
import CpuTable from "../features/cpu/CpuTable";
import CpuFilter from "../features/cpu/CpuFilter";
import { useTranslation } from "react-i18next";

function Cpu() {
  const {t} = useTranslation();
  return (
    <>
      <Row type="horizontal">
      <Heading as="h1">{t('Choose a Processor')}</Heading>
      <CpuTableOperations />
        </Row>
          <Row type="horizontal">
          <CpuFilter />
          <CpuTable />
      </Row>
    </>
  );
}

export default Cpu;
