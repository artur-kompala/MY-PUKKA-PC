import Heading from "../ui/Heading"
import Row from "../ui/Row"
import StorageTableoperations from "../features/storage/StorgeTableoperations"
import StorageTable from "../features/storage/StorageTable"
import StorageFilter from "../features/storage/StorageFilter"

function Storage() {
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">Choose a Storage</Heading>
            <StorageTableoperations/>
        </Row>
        <Row type='horizontal'>
            <StorageFilter/>
            <StorageTable/>
        </Row>
        </>
    )
}

export default Storage
