import Heading from "../ui/Heading"
import Row from "../ui/Row"
import CpuTableOperations from "../features/cpu/CpuTableoperations"
import CpuTable from "../features/cpu/CpuTable"
import Filter from "../ui/Filter"

function Cpu() {
    return (
        <>  <Row type="horizontal">
                <Filter/>
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
