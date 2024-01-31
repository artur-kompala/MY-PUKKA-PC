import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const {t,i18n} = useTranslation();
  useEffect(()=>{
      const lng = navigator.language
      i18n.changeLanguage(lng)
  },[])
  
  return (
    <LoginLayout>
        <Logo />
        <Heading as="h4">{t('greeting')}</Heading>
        <LoginForm />
    </LoginLayout>
  );
}

export default Login;