import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { t } from "i18next";

function UpdateUserDataForm() {
  const {
    user: {
      user_metadata: { fullName: currentFullName ,email},
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName},
      {
        onSuccess: () => {
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label={t("Email")}>
        <Input value={email} disabled />
      </FormRow>

      <FormRow label={t("name")}>
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          {t("Cancel")}
        </Button>
        <Button disabled={isUpdating}>{t("Update account")}</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
