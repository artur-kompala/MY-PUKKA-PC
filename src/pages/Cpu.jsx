import Heading from "../ui/Heading"
import Row from "../ui/Row"
import CpuTableOperations from "../features/cpu/CpuTableoperations"
import CpuTable from "../features/cpu/CpuTable"
import CpuFilter from "../features/cpu/CpuFilter"

function Cpu() {
    return (
        <>  <Row type="horizontal">
                <CpuFilter/>
            <div>
            <Row type="horizontal">
                <Heading as="h1">Choose a CPU</Heading>
                <CpuTableOperations/>
            </Row>
            <CpuTable/>
            </div>
            
            </Row>
        </>
    )
}

export default Cpu
