import CpuCoolerFilter from "../features/cpuCooler/CpuCoolerFilter"
import CpuCoolerTable from "../features/cpuCooler/CpuCoolerTable"
import CpuCoolerTableoperations from "../features/cpuCooler/CpuCoolerTableoperations"
import Heading from "../ui/Heading"
import Row from "../ui/Row"

function CpuCooler() {
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">Choose a Processor Cooler</Heading>
            <CpuCoolerTableoperations/>
        </Row>
        <Row type='horizontal'>
            <CpuCoolerFilter/>
            <CpuCoolerTable/>
        </Row>
        </>
    )
}

export default CpuCooler
