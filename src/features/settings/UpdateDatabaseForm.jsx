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

      {collection === "mobo" && (
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
          <FormRow label={t("socket")}>
            <Input
              type="text"
              name="socket"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("form_factor")}>
            <Input
              type="text"
              name="form_factor"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("max_memory")}>
            <Input
              type="number"
              name="max_memory"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("memory_slots")}>
            <Input
              type="number"
              name="memory_slots"
              onChange={handleInputNumber}
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
          <FormRow label={t("wifi")}>
            <Input
              type="checkbox"
              name="wifi"
              onChange={handleInputBool}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("memory_speed")}>
            <Input
              type="text"
              name="memory_speed"
              onChange={handleArrayNumberChange}
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
          <FormRow label={t("chipset")}>
            <Input
              type="text"
              name="chipset"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("integrated_graphics_support")}>
            <Input
              type="checkbox"
              name="integrated_graphics_support"
              onChange={handleInputBool}
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
          <FormRow label={t("gid")}>
            <Input
              type="text"
              name="gid"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("m2")}>
            <Input
              type="checkbox"
              name="m2"
              onChange={handleInputBool}
              disabled={isUpdating}
            />
          </FormRow>
        </>
      )}

      {collection === "gpu" && (
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
          <FormRow label={t("chipset")}>
            <Input
              type="text"
              name="chipset"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("memory")}>
            <Input
              type="number"
              name="memory"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("core_clock")}>
            <Input
              type="number"
              name="core_clock"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("boost_clock")}>
            <Input
              type="number"
              name="boost_clock"
              onChange={handleInputNumber}
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
          <FormRow label={t("length")}>
            <Input
              type="number"
              name="length"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("rps")}>
            <Input
              type="number"
              name="rps"
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
          <FormRow label={t("gid")}>
            <Input
              type="text"
              name="gid"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("rt")}>
            <Input
              type="checkbox"
              name="rt"
              onChange={handleInputBool}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("fg")}>
            <Input
              type="text"
              name="fg"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
        </>
      )}

      {collection === "memory" && (
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
          <FormRow label={t("type")}>
            <Input
              type="text"
              name="type"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("speed")}>
            <Input
              type="number"
              name="speed"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("module")}>
            <Input
              type="number"
              name="module"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("capacity")}>
            <Input
              type="number"
              name="capacity"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("color")}>
            <Input
              type="text"
              name="color"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("tense")}>
            <Input
              type="number"
              name="tense"
              step={0.1}
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("delays")}>
            <Input
              type="number"
              name="delays"
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

      {collection === "psu" && (
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
          <FormRow label={t("type")}>
            <Input
              type="text"
              name="type"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("efficiency")}>
            <Input
              type="text"
              name="efficiency"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("wattage")}>
            <Input
              type="number"
              name="wattage"
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
          <FormRow label={t("color")}>
            <Input
              type="text"
              name="color"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("modular")}>
            <Input
              type="checkbox"
              name="modular"
              onChange={handleInputBool}
              disabled={isUpdating}
            />
          </FormRow>
        </>
      )}
      
      {collection === "case" && (
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
          <FormRow label={t("type")}>
            <Input
              type="text"
              name="type"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("form_factor")}>
            <Input
              type="text"
              name="form_factor"
              onChange={handleArrayChange}
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
          <FormRow label={t("gid")}>
            <Input
              type="text"
              name="gid"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("psu")}>
            <Input
              type="checkbox"
              name="psu"
              onChange={handleInputBool}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("side_panel")}>
            <Input
              type="text"
              name="side_panel"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("external_volume")}>
            <Input
              type="number"
              name="external_volume"
              step={0.1}
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("internal_35_bays")}>
            <Input
              type="number"
              name="internal_35_bays"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("gpu_length")}>
            <Input
              type="number"
              name="gpu_length"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("cpu_cooler_length")}>
            <Input
              type="number"
              name="cpu_cooler_length"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("fan")}>
            <Input
              type="text"
              name="fan"
              onChange={handleArrayNumberChange}
              disabled={isUpdating}
            />
          </FormRow>
        </>
      )}

      {collection === "fan" && (
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
          <FormRow label={t("color")}>
            <Input
              type="text"
              name="color"
              onChange={handleInputChange}
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
          <FormRow label={t("rpm")}>
            <Input
              type="number"
              name="rpm"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("flow")}>
            <Input
              type="number"
              name="flow"
              step={0.1}
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("noise")}>
            <Input
              type="number"
              name="noise"
              step={0.1}
              onChange={handleInputNumber}
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

      {collection === "storage" && (
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
          <FormRow label={t("capacity")}>
            <Input
              type="number"
              name="capacity"
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
          <FormRow label={t("read")}>
            <Input
              type="number"
              name="read"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("write")}>
            <Input
              type="number"
              name="write"
              onChange={handleInputNumber}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("interface")}>
            <Input
              type="text"
              name="interface"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("form_factor")}>
            <Input
              type="text"
              name="form_factor"
              onChange={handleInputChange}
              disabled={isUpdating}
            />
          </FormRow>
          <FormRow label={t("cache")}>
            <Input
              type="number"
              name="cache"
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
        </>
      )}

      {collection === "os" && (
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
          <FormRow label={t("max_memory")}>
            <Input
              type="number"
              name="max_memory"
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
          <FormRow label={t("mode")}>
            <Input
              type="number"
              name="mode"
              onChange={handleInputNumber}
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
