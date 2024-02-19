import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import { useTranslation } from "react-i18next";

function Account() {
  const {t,i18n} = useTranslation();
  return (
    <>
      <Heading as="h1">{t('Update your account')}</Heading>

      <Row>
        <Heading as="h3">{t('Update user data')}</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">{t('Update password')}</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
