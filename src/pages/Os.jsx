import OsFilter from "../features/os/OsFilter"
import Heading from "../ui/Heading"
import Row from "../ui/Row"
import OsTableoperations from "../features/os/OsTableoperations"
import OsTable from "../features/os/OsTable"

function Os() {
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">Choose operating system</Heading>
            <OsTableoperations/>
        </Row>
        <Row type='horizontal'>
            <OsFilter/>
            <OsTable/>
        </Row>
        </>
    )
}

export default Os
