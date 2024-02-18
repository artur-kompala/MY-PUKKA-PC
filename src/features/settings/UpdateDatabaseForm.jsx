import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Select from "../../ui/Select";
import { useUpdateDatabase } from "./useUpdateDatabase";
import { useTranslation } from "react-i18next";
import Input from "../../ui/Input";

function UpdateDatabaseForm() {
  const { t } = useTranslation();
  const { updateDatabase, isUpdating } = useUpdateDatabase();
  const [collection, setCollection] = useState("cpu");
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    const arrayValues = value.split(",").map((item) => item.trim());
    setFormData((prevState) => ({
      ...prevState,
      [name]: arrayValues,
    }));
  };

  const handleArrayNumberChange = (e) => {
    const { name, value } = e.target;
    
    const arrayNumberValues = value.split(",").map((item) => {
      const trimmedItem = item.trim();
      
      const number = Number(trimmedItem);
      return isNaN(number) ? 0 : number; 
    });

    setFormData((prevState) => ({
      ...prevState,
      [name]: arrayNumberValues,
    }));
  };
  const handleInputNumber = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: Number(value), // Konwertuje wartość inputa na liczbę
    }));
  };

  const handleInputBool = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked, // Przypisuje wartość boolowską na podstawie zaznaczenia checkboxa
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!collection) return;
    updateDatabase(
      { collection, data: formData },
      {
        onSuccess: () => {
          e.target.reset();
          setFormData({});
        },
      }
    );
  };

  const handleCancel = () => {
    setCollection("cpu");
    setFormData({});
  };
  const handleCollectionChange = (e) => {
    const newCollection = e.target.value;
    setCollection(newCollection);
    setFormData({});
  };

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
          onChange={handleCollectionChange}
          id="collection"
          disabled={isUpdating}
        />
      </FormRow>

      {collection === "cpu" && (
        <>
          <FormRow label={t("name")}>
            <Input
              type="text"
              name="name"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("manufacture")}>
            <Input
              type="text"
              name="manufacture"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("process")}>
            <Input
              type="text"
              name="process"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("socket")}>
            <Input
              type="text"
              name="socket"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("core_family")}>
            <Input
              type="text"
              name="core_family"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("smt")}>
            <Input
              type="checkbox"
              name="smt"
              onChange={handleInputBool}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("graphics")}>
            <Input
              type="checkbox"
              name="graphics"
              onChange={handleInputBool}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("tdp")}>
            <Input
              type="number"
              name="tdp"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("watts_usage")}>
            <Input
              type="number"
              name="watts_usage"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("core_clock")}>
            <Input
              type="number"
              name="core_clock"
              step={0.01}
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("core_count")}>
            <Input
              type="number"
              name="core_count"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("boost_clock")}>
            <Input
              type="number"
              name="boost_clock"
              step={0.01}
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("pcie")}>
            <Input
              type="number"
              name="pcie"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("chipset")}>
            <Input
              type="text"
              name="chipset"
              onChange={handleArrayChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("memory_type")}>
            <Input
              type="text"
              name="memory_type"
              onChange={handleArrayChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("gid")}>
            <Input
              type="text"
              name="gid"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
        </>
      )}

      {collection === "cooler" && (
        <>
          <FormRow label={t("manufacture")}>
            <Input
              type="text"
              name="manufacture"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("name")}>
            <Input
              type="text"
              name="name"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("rpm")}>
            <Input
              type="text"
              name="rpm"
              onChange={handleArrayNumberChange} 
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("noise_level")}>
            <Input
              type="text"
              name="noise_level"
              onChange={handleArrayNumberChange} 
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("color")}>
            <Input
              type="text"
              name="color"
              onChange={handleArrayChange} 
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("size")}>
            <Input
              type="number"
              name="size"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("type")}>
            <Input
              type="text"
              name="type"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("socket")}>
            <Input
              type="text"
              name="socket"
              onChange={handleArrayChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("tdp")}>
            <Input
              type="number"
              name="tdp"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("gid")}>
            <Input
              type="text"
              name="gid"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("led")}>
            <Input
              type="checkbox"
              name="led"
              onChange={handleInputBool}
              disabled={isUpdating}
            />
          </FormRow>
        </>
      )}

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          {t("Cancel")}
        </Button>
        <Button disabled={isUpdating}>{t("Update")}</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateDatabaseForm;
