import { useTranslation } from "react-i18next"
import CaseFilter from "../features/case/CaseFilter"
import CaseTable from "../features/case/CaseTable"
import CaseTableoperations from "../features/case/CaseTableoperations"
import Heading from "../ui/Heading"
import Row from "../ui/Row"

function Case() {
    const {t} = useTranslation();
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">{t('Choose a case')}</Heading>
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
