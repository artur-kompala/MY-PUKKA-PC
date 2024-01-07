import Heading from "../ui/Heading"
import Row from "../ui/Row"
import CpuTableOperations from "../features/cpu/CpuTableoperations"
import CpuTable from "../features/cpu/CpuTable"

function Cpu() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Choose a CPU</Heading>
                <CpuTableOperations/>
            </Row>
            {
            <CpuTable/>
        
            }
        </>
    )
}

export default Cpu
