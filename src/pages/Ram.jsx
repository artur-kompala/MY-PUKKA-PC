import Heading from "../ui/Heading"
import Row from "../ui/Row"
import MemoryTableoperations from "../features/memory/MemoryTableoperations"
import MemoryFilter from "../features/memory/MemoryFilter"
import MemoryTable from "../features/memory/MemoryTable"
import { useTranslation } from "react-i18next"

function Ram() {
    const {t} = useTranslation();
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">{t('Choose a memory')}</Heading>
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
