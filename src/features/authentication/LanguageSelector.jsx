import Select from "../../ui/Select";

function LanguageSelector({i18n}) {
    
    return (
        <Select
        options={[
            { value: "pl", label: "Polski" },
            { value: "en", label:  "English" },
         ]}
          type="white"
          onChange={(e)=>i18n.changeLanguage(e.target.value)}
        />
      );
}

export default LanguageSelector
