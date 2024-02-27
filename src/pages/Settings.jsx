import { useTranslation } from "react-i18next";
import UpdateBenchmarkForm from "../features/settings/UpdateBenchmarkForm";
import UpdateDatabaseForm from "../features/settings/UpdateDatabaseForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DeleteDatabaseForm from "../features/settings/DeleteDatabaseForm";

function Settings() {
  const {t} = useTranslation();
    return (
        <>
          <Heading as="h1">{t('Update database')}</Heading>
    
          <Row>
            <Heading as="h3">{t('Update benchmark')}</Heading>
            <UpdateBenchmarkForm />
          </Row>
          <Row>
            <Heading as="h3">{t('Delete product')}</Heading>
            <DeleteDatabaseForm/>
          </Row>
    
          <Row>
            <Heading as="h3">{t('Update collection')}</Heading>
            <UpdateDatabaseForm />
          </Row>
        </>
      );
}

export default Settings
