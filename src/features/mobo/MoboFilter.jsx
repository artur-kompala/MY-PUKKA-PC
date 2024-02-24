import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import color from "../../styles/color";
import { getMoboFilters } from "../../services/apiMobo";
import useFilters from "../useFilters";
import { useTranslation } from "react-i18next";

const labels = {
  manufactures: [
    { value: "All", label: "All" },
  ],
  socket: [
    { value: "All", label: "All" },
  ],
  form_factor: [
    { value: "All", label: "All" },
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
  chipset: [
    { value: "All", label: "All" },
  ],
  price: [],
};


const dataFilter = await getMoboFilters();

dataFilter.data.manufacture.map((item) =>
  labels.manufactures.push({ value: item, label: item })
);
dataFilter.data.form_factor.map((item) =>
  labels.form_factor.push({ value: item, label: item })
);
dataFilter.data.socket.map((item) =>
  labels.socket.push({ value: item, label: item })
);
dataFilter.data.chipset.map((item) =>
  labels.chipset.push({ value: item, label: item })
);

labels.price[0] = dataFilter.data.maxMin[0].minPrice;
labels.price[1] = dataFilter.data.maxMin[0].maxPrice;


function MoboFilter() {
  const {t} = useTranslation();
  const initialState = {
    manufacturesFilter: "All",
    form_factorFilter: "All",
    socketFilter: "All",
    chipsetFilter: "All",
    wifiFilter: "All",
    m2Filter: "All",
    pcieFilter: "All",
    integrated_graphics_supportFilter: "All",
    priceFilter: labels.price,
  };

  const reducer = (state, action) => {
    const actionTypes = {
      SET_MANUFACTURES_FILTER: "manufacturesFilter",
      SET_FORM_FACTOR_FILTER: "form_factorFilter",
      SET_SOCKET_FILTER: "socketFilter",
      SET_CHIPSET_FILTER: "chipsetFilter",
      SET_WIFI_FILTER: "wifiFilter",
      SET_M2_FILTER: "m2Filter",
      SET_PCIE_FILTER: "pcieFilter",
      SET_INTEGRATED_GRAPHICS_SUPPORT_FILTER: "integrated_graphics_supportFilter",
      SET_PRICE_FILTER: "priceFilter",
    };
    if (action.type in actionTypes) {
      const filterKey = actionTypes[action.type];
      return { ...state, [filterKey]: action.payload };
    }else{
      return initialState
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filters = {
      manufactures: state.manufacturesFilter,
      form_factor: state.form_factorFilter,
      socket: state.socketFilter,
      wifi: state.wifiFilter,
      chipset: state.chipsetFilter,
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

  const {handleApply, handleReset} = useFilters();

  const handleChange = (filterType, event) => {
    dispatch({ type: `SET_${filterType}_FILTER`, payload: event.target.value });
  };

  return (
    <StyledFilter>
      <StyledFilterButton>
        <Button onClick={()=>handleApply(searchParams,setSearchParams)}>{t('apply')}</Button>
        <Button onClick={()=>handleReset(dispatch,'/mobo')}>{t('reset')}</Button>
      </StyledFilterButton>
      <FilterRadioGroup
        name={t("Manufactures")}
        defaultValue={initialState.manufacturesFilter}
        onChange={handleChange}
        handleLabel={"MANUFACTURES"}
        labels={labels.manufactures}
        color={color}
      />
      <FilterRadioGroup
        name={t("Form factor")}
        defaultValue={initialState.formfactorFilter}
        handleLabel={"FORM_FACTOR"}
        onChange={handleChange}
        labels={labels.form_factor}
        color={color}
      />
      <FilterRadioGroup
        name={t("Socket")}
        defaultValue={initialState.socketFilter}
        handleLabel={"SOCKET"}
        onChange={handleChange}
        labels={labels.socket}
        color={color}
      ></FilterRadioGroup>
      <FilterRadioGroup
        name={t("Chipset")}
        defaultValue={initialState.chipsetFilter}
        handleLabel={"CHIPSET"}
        onChange={handleChange}
        labels={labels.chipset}
        color={color}
      ></FilterRadioGroup>
      <FilterRadioGroup
        name={t("Wifi")}
        defaultValue={initialState.wifiFilter}
        handleLabel={"WIFI"}
        onChange={handleChange}
        labels={labels.wifi}
        color={color}
      />
      <FilterRadioGroup
        name={t("M.2")}
        defaultValue={initialState.m2Filter}
        handleLabel={"M2"}
        onChange={handleChange}
        labels={labels.m2}
        color={color}
      ></FilterRadioGroup>
       <FilterRadioGroup
        name={t("Graphic")}
        defaultValue={initialState.integrated_graphics_supportFilter}
        handleLabel={"INTEGRATED_GRAPHICS_SUPPORT"}
        onChange={handleChange}
        labels={labels.integrated_graphics_support}
        color={color}
      />
      <FilterRadioGroup
        name={t("PCIe")}
        defaultValue={initialState.pcieFilter}
        handleLabel={"PCIE"}
        onChange={handleChange}
        labels={labels.pcie}
        color={color}
      ></FilterRadioGroup>
      <FilterRangeSlider
        name={t("Price")}
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
