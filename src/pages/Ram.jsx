import Heading from "../ui/Heading"
import Row from "../ui/Row"
import MemoryTableoperations from "../features/memory/MemoryTableoperations"
import MemoryFilter from "../features/memory/MemoryFilter"
import MemoryTable from "../features/memory/MemoryTable"

function Ram() {
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">Choose a memory</Heading>
            <MemoryTableoperations/>
        </Row>
        <Row type='horizontal'>
            <MemoryFilter/>
            <MemoryTable/>
        </Row>
        </>
    )
}

export default Ram
