import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useTranslation } from "react-i18next";
import { useRegister } from "./useRegister";
import Heading from "../../ui/Heading";

function LoginForm({isLogin,setIsLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  
  const { login, isLoadingLogin } = useLogin();
  const { register, isLoadingRegister } = useRegister();
  const isLoading = isLoadingLogin || isLoadingRegister;

  const { t, i18n } = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    if (isLogin) {
      login(
        { email, password },
        {
          onSettled: () => {
            setEmail("");
            setPassword("");
          },
        }
      );
    } else {
      register(
        { fullName,email,password },
        {
          onSettled: () => {
            setFullName("");
            setEmail("");
            setPassword("");
          },
        }
      );
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {!isLogin && (
        <FormRowVertical label={t("name")}>
          <Input
            type="name"
            id="username"
            autoComplete="username"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
      )}

      <FormRowVertical label={t("email")}>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label={t("password")}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button type="submit" size="large" disabled={isLoading}>
          {!isLoading ? isLogin ? t("login") : t("register") : <SpinnerMini />}
        </Button>
        <Button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          disabled={isLoading}
        >
          {isLogin ? t("Switch To Register") : t("Switch To Login")}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
