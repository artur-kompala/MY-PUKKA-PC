import Heading from "../ui/Heading"
import Row from "../ui/Row"
import MoboTable from "../features/mobo/MoboTable"
import MoboTableoperations from "../features/mobo/MoboTableoperations"
import MoboFilter from "../features/mobo/MoboFilter"
import { useTranslation } from "react-i18next"

function Mobo() {
    const {t} = useTranslation();
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">{t('Choose a motherboard')}</Heading>
            <MoboTableoperations/>
        </Row>
        <Row type='horizontal'>
            <MoboFilter/>
            <MoboTable/>
        </Row>
        </>
    )
}

export default Mobo
