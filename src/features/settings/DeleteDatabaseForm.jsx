import { useState } from "react";
import { useDeleteDatabase } from "./useDeleteDatabase";
import { useTranslation } from "react-i18next";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

function DeleteDatabaseForm() {
  const { t } = useTranslation();
  const { deleteDatabase, isDeleting } = useDeleteDatabase();
  const [collection, setcollection] = useState("cpu");
  const [gid, setGid] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!collection) return;
    deleteDatabase(
      { collection, gid },
      {
        onSuccess: () => {
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setcollection("cpu");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label={t("collection")}>
        <Select
          options={[
            { value: "cpu", label: t("cpu") },
            { value: "cooler", label: t("cooler") },
            { value: "mobo", label: t("mobo") },
            { value: "gpu", label: t("gpu") },
            { value: "memory", label: t("memory") },
            { value: "psu", label: t("psu") },
            { value: "case", label: t("case") },
            { value: "fan", label: t("fan") },
            { value: "storage", label: t("storage") },
            { value: "os", label: t("os") },
          ]}
          value={collection}
          onChange={(e) => setcollection(e.target.value)}
          id="collection"
          disabled={isDeleting}
        ></Select>
      </FormRow>

      <FormRow label={t("gid")}>
        <Input
          type="text"
          name="gid"
          onChange={(e)=>setGid(e.target.value)}
          disabled={isDeleting}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isDeleting}
          onClick={handleCancel}
        >
          {t("Cancel")}
        </Button>
        <Button disabled={isDeleting}>{t("delete")}</Button>
      </FormRow>
    </Form>
  );
}

export default DeleteDatabaseForm;
