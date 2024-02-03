import Heading from "../ui/Heading"
import Row from "../ui/Row"
import GpuTableoperations from "../features/gpu/GpuTableoperations"
import GpuFilter from "../features/gpu/GpuFilter"
import GpuTable from "../features/gpu/GpuTable"
function Gpu() {
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">Choose a Graphic Card</Heading>
            <GpuTableoperations/>
        </Row>
        <Row type='horizontal'>
            <GpuFilter/>
            <GpuTable/>
        </Row>
        </>
    )
}

export default Gpu
