import FilterComponent from "./FilterComponent";
import RangeSlider from "./RangeSlider";

const FilterRangeSlider = ({ name, handleChangeSlider, value, min, max ,handleLabel}) => {
    return (
      <FilterComponent name={name}>
        <RangeSlider handleChangeSlider={(e) => handleChangeSlider(handleLabel, e)} value={value} min={min} max={max} />
      </FilterComponent>
    );
  };

export default FilterRangeSlider
