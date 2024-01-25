import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CpuTableOperations from "../features/cpu/CpuTableoperations";
import CpuTable from "../features/cpu/CpuTable";
import CpuFilter from "../features/cpu/CpuFilter";

function Cpu() {
  return (
    <>
      <Row type="horizontal">
      <Heading as="h1">Choose a Processor</Heading>
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
