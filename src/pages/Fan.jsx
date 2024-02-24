import { useTranslation } from "react-i18next"
import FanFilter from "../features/fan/FanFilter"
import FanTable from "../features/fan/FanTable"
import Fantableoperations from "../features/fan/Fantableoperations"
import Heading from "../ui/Heading"
import Row from "../ui/Row"

function Fan() {
    const {t} = useTranslation();
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">{t('Choose a Fan')}</Heading>
            <Fantableoperations/>
        </Row>
        <Row type='horizontal'>
            <FanFilter/>
            <FanTable/>
        </Row>
        </>
    )
}

export default Fan
