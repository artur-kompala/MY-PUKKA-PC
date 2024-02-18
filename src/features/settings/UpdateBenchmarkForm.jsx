import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useUpdateBenchmark } from "./useUpdateBenchmark";
import Button from "../../ui/Button";
import { useState } from "react";
import FileInput from "../../ui/FileInput";
import Select from "../../ui/Select";
import { useTranslation } from "react-i18next";

function UpdateBenchmarkForm() {
  const {t,i18n} = useTranslation();
  const { updateBenchmark, isUpdating } = useUpdateBenchmark();
  const [collection, setcollection] = useState("gpu");
  const [file, setFile] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!collection) return;
    updateBenchmark({ collection,file},{ onSuccess: () => {e.target.reset()},});
  }

  function handleCancel() {
    setcollection('gpu');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label={t('collection')}>
        <Select
          options={[
            { value: "gpu", label: t('gpu') },
              { value: "cpu", label: t('cpu') },
          ]}
          value={collection}
          onChange={(e) => setcollection(e.target.value)}
          id="collection"
          disabled={isUpdating}
        ></Select>
      </FormRow>

      <FormRow label={t('csv')}>
        <FileInput
          id="csv"
          accept="text/csv"
          onChange={(e) => setFile(e.target.files[0])}
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
          {t('Cancel')}
        </Button>
        <Button disabled={isUpdating}>{t('Update')}</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateBenchmarkForm;
