
import PsuFilter from "../features/psu/PsuFilter"
import PsuTable from "../features/psu/PsuTable"
import PsuTableoperations from "../features/psu/PsuTableoperations"
import Heading from "../ui/Heading"
import Row from "../ui/Row"

function Psu() {
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">Choose a Power Supply</Heading>
            <PsuTableoperations/>
        </Row>
        <Row type='horizontal'>
            <PsuFilter/>
            <PsuTable/>
        </Row>
        </>
    )
}

export default Psu
