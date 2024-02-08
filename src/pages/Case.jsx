import CaseFilter from "../features/case/CaseFilter"
import CaseTable from "../features/case/CaseTable"
import CaseTableoperations from "../features/case/CaseTableoperations"
import Heading from "../ui/Heading"
import Row from "../ui/Row"

function Case() {
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">Choose a case</Heading>
            <CaseTableoperations/>
        </Row>
        <Row type='horizontal'>
            <CaseFilter/>
            <CaseTable/>
        </Row>
        </>
    )
}

export default Case
