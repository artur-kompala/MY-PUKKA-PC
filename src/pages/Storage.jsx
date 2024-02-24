import Heading from "../ui/Heading"
import Row from "../ui/Row"
import StorageTableoperations from "../features/storage/StorgeTableoperations"
import StorageTable from "../features/storage/StorageTable"
import StorageFilter from "../features/storage/StorageFilter"
import { useTranslation } from "react-i18next"

function Storage() {
    const {t} = useTranslation();
    return (
        <>
        <Row type='horizontal'>
            <Heading as="h1">{t('Choose a Storage')}</Heading>
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
