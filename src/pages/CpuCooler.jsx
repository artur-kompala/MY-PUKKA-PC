import { useTranslation } from "react-i18next"
import CpuCoolerFilter from "../features/cpuCooler/CpuCoolerFilter"
import CpuCoolerTable from "../features/cpuCooler/CpuCoolerTable"
import CpuCoolerTableoperations from "../features/cpuCooler/CpuCoolerTableoperations"
import Heading from "../ui/Heading"
import Row from "../ui/Row"

function CpuCooler() {
    const {t} = useTranslation();
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">{t('Choose a Processor Cooler')}</Heading>
            <CpuCoolerTableoperations/>
        </Row>
        <Row type='horizontal'>
            <CpuCoolerFilter/>
            <CpuCoolerTable/>
        </Row>
        </>
    )
}

export default CpuCooler
