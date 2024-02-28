import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { t } from "i18next";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label={t("New password (min 8 chars)")}
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: t("This field is required"),
            minLength: {
              value: 8,
              message: t("Password needs a minimum of 8 characters"),
            },
          })}
        />
      </FormRow>

      <FormRow
        label={t("Confirm password")}
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: t("This field is required"),
            validate: (value) =>
              getValues().password === value || t("Passwords need to match"),
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          {t("Cancel")}
        </Button>
        <Button disabled={isUpdating}>{t("Update password")}</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
