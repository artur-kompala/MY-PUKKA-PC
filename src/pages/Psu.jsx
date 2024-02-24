
import { useTranslation } from "react-i18next"
import PsuFilter from "../features/psu/PsuFilter"
import PsuTable from "../features/psu/PsuTable"
import PsuTableoperations from "../features/psu/PsuTableoperations"
import Heading from "../ui/Heading"
import Row from "../ui/Row"

function Psu() {
    const {t} = useTranslation();
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">{t('Choose a Power Supply')}</Heading>
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
