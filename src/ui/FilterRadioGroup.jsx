import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import FilterComponent from "./FilterComponent";

const FilterRadioGroup = ({ name, defaultValue, onChange, labels, color,handleLabel}) => {
    return (
      <FilterComponent name={name}>
        <RadioGroup defaultValue={defaultValue} name="radio-buttons-group" onChange={(e) => onChange(handleLabel, e)}>
          {labels.map((label) => (
            <FormControlLabel key={label.value} value={label.value} control={<Radio sx={color} />} label={label.label} />
          ))}
        </RadioGroup>
      </FilterComponent>
    );
  };

export default FilterRadioGroup
