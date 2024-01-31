import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import color from "../../styles/color";

const labels = {
  manufactures: [
    { value: "All", label: "All" },
    { value: "ASRock", label: "ASRock" },
    { value: "Asus", label: "Asus" },
    { value: "Gigabyte", label: "Gigabyte" },
    { value: "MSI", label: "MSI" },
  ],
  form_factor: [
    { value: "All", label: "All" },
    { value: "ATX", label: "ATX" },
    { value: "Micro ATX", label: "Micro ATX" },
  ],
  socket: [
    { value: "All", label: "All" },
    { value: "AM5", label: "AM5" },
    { value: "LGA1700", label: "LGA1700" },
  ],
  wifi: [
    { value: "All", label: "All" },
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ],
  m2: [
    { value: "All", label: "All" },
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ],
  pcie: [
    { value: "All", label: "All" },
    { value: 5, label: "PCIe 5.0" },
    { value: 4, label: "PCIe 4.0" },
  ],
  integrated_graphics_support: [
    { value: "All", label: "All" },
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ],
};

const reducer = (state, action) => {
  const actionTypes = {
    SET_MANUFACTURES_FILTER: "manufacturesFilter",
    SET_FORM_FACTOR_FILTER: "form_factorFilter",
    SET_SOCKET_FILTER: "socketFilter",
    SET_WIFI_FILTER: "wifiFilter",
    SET_M2_FILTER: "m2Filter",
    SET_PCIE_FILTER: "pcieFilter",
    SET_INTEGRATED_GRAPHICS_SUPPORT_FILTER: "integrated_graphics_supportFilter",
    SET_PRICE_FILTER: "priceFilter",
  };
  if (action.type in actionTypes) {
    const filterKey = actionTypes[action.type];
    return { ...state, [filterKey]: action.payload };
  }
};

const initialState = {
  manufacturesFilter: "All",
  form_factorFilter: "All",
  socketFilter: "All",
  wifiFilter: "All",
  m2Filter: "All",
  pcieFilter: "All",
  integrated_graphics_supportFilter: "All",
  priceFilter: [0, 1500],
};

function MoboFilter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const filters = {
      manufactures: state.manufacturesFilter,
      form_factor: state.form_factorFilter,
      socket: state.socketFilter,
      wifi: state.wifiFilter,
      m2: state.m2Filter,
      pcie: state.pcieFilter,
      integrated_graphics_support: state.integrated_graphics_supportFilter,
      priceMin: state.priceFilter[0],
      priceMax: state.priceFilter[1],
    };

    for (const [key, value] of Object.entries(filters)) {
      searchParams.set(key, value);
    }
  }, [state, setSearchParams, searchParams]);

  const handleChange = (filterType, event) => {
    dispatch({ type: `SET_${filterType}_FILTER`, payload: event.target.value });
  };

  const handleApply = () => {
    setSearchParams(searchParams);
  };

  const handleReset = () => {
    navigate("/mobo");
    window.location.reload();
  };

  return (
    <StyledFilter>
      <StyledFilterButton>
        <Button onClick={handleApply}>Apply</Button>
        <Button onClick={handleReset}>Reset</Button>
      </StyledFilterButton>
      <FilterRadioGroup
        name={"Manufactures"}
        defaultValue={initialState.manufacturesFilter}
        onChange={handleChange}
        handleLabel={"MANUFACTURES"}
        labels={labels.manufactures}
        color={color}
      />
      <FilterRadioGroup
        name={"Form factor"}
        defaultValue={initialState.formfactorFilter}
        handleLabel={"FORM_FACTOR"}
        onChange={handleChange}
        labels={labels.form_factor}
        color={color}
      />
      <FilterRadioGroup
        name={"Socket"}
        defaultValue={initialState.socketFilter}
        handleLabel={"SOCKET"}
        onChange={handleChange}
        labels={labels.socket}
        color={color}
      ></FilterRadioGroup>
      <FilterRadioGroup
        name={"Wifi"}
        defaultValue={initialState.wifiFilter}
        handleLabel={"WIFI"}
        onChange={handleChange}
        labels={labels.wifi}
        color={color}
      />
      <FilterRadioGroup
        name={"M.2"}
        defaultValue={initialState.m2Filter}
        handleLabel={"M2"}
        onChange={handleChange}
        labels={labels.m2}
        color={color}
      ></FilterRadioGroup>
      <FilterRangeSlider
        name={"Price"}
        handleChangeSlider={handleChange}
        handleLabel={"PRICE"}
        value={state.priceFilter}
        min={initialState.priceFilter[0]}
        max={initialState.priceFilter[1]}
      />
    </StyledFilter>
  );
}

export default MoboFilter;
