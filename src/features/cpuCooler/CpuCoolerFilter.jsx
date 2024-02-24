import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import { getCpuCoolerFilters } from "../../services/apiCpuCooler";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import color from "../../styles/color";
import useFilters from "../useFilters";
import { useTranslation } from "react-i18next";

const labels = {
  manufactures: [{ value: "All", label: "All" }],
  type: [{ value: "All", label: "All" }],
  socket: [{ value: "All", label: "All" }],
  tdp: [],
  price: [],
};

const dataFilter = await getCpuCoolerFilters();

dataFilter.data.manufacture.map((item) =>
  labels.manufactures.push({ value: item, label: item })
);
dataFilter.data.socket.map((item) =>
  labels.socket.push({ value: item, label: item })
);
dataFilter.data.type.map((item) =>
  labels.type.push({ value: item, label: item })
);

labels.tdp[0] = dataFilter.data.maxMin[0].minTdp;
labels.tdp[1] = dataFilter.data.maxMin[0].maxTdp;
labels.price[0] = dataFilter.data.maxMin[0].minPrice;
labels.price[1] = dataFilter.data.maxMin[0].maxPrice;

function CpuCoolerFilter() {
  const {t} = useTranslation();
  const initialState = {
    manufacturesFilter: "All",
    typeFilter: "All",
    socketFilter: "All",
    tdpFilter: labels.tdp,
    priceFilter: labels.price,
  };

  const reducer = (state, action) => {
    const actionTypes = {
      SET_MANUFACTURES_FILTER: "manufacturesFilter",
      SET_TYPE_FILTER: "typeFilter",
      SET_SOCKET_FILTER: "socketFilter",
      SET_PRICE_FILTER: "priceFilter",
      SET_TDP_FILTER: "tdpFilter",
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
      type: state.typeFilter,
      socket: state.socketFilter,
      tdpMin: state.tdpFilter[0],
      tdpMax: state.tdpFilter[1],
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
        <Button onClick={()=>handleApply(searchParams,setSearchParams)}> {t('apply')}</Button>
        <Button onClick={()=>handleReset(dispatch,'/cpu-cooler')}>{t('reset')}</Button>
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
        name={t("Type")}
        defaultValue={initialState.typeFilter}
        handleLabel={"TYPE"}
        onChange={handleChange}
        labels={labels.type}
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
      <FilterRangeSlider
        name={t("TDP")}
        handleChangeSlider={handleChange}
        handleLabel={"TDP"}
        value={state.tdpFilter}
        min={initialState.tdpFilter[0]}
        max={initialState.tdpFilter[1]}
      />
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

export default CpuCoolerFilter;
