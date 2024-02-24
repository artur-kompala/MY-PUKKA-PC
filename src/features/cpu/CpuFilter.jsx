import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import color from "../../styles/color";
import { getCpuFilters } from "../../services/apiCPU";
import useFilters from "../useFilters";
import { useTranslation } from "react-i18next";
import { logout } from "../../services/apiAuth";

const labels = {
  manufactures: [{ value: "All", label: "All" }],
  graphic: [
    { value: "All", label: "All" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ],
  smt: [
    { value: "All", label: "All" },
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ],
  coreFamily: [{ value: "All", label: "All" }],
  socket: [{ value: "All", label: "All" }],
  coreCount: [],
  coreClock: [],
  boostClock:[],
  tdp: [],
  price: [],
};

const {data} = await getCpuFilters();

data.manufacture.map((item) =>
  labels.manufactures.push({ value: item, label: item })
);
data.socket.map((item) =>
  labels.socket.push({ value: item, label: item })
);
data.coreFamily.map((item) =>
  labels.coreFamily.push({ value: item, label: item })
);

labels.tdp[0] = data.maxMin[0].minTdp;
labels.tdp[1] = data.maxMin[0].maxTdp;
labels.price[0] = data.maxMin[0].minPrice;
labels.price[1] = data.maxMin[0].maxPrice;
labels.coreClock[0] = data.maxMin[0].minCoreClock;
labels.coreClock[1] = data.maxMin[0].maxCoreClock;
labels.boostClock[0] = data.maxMin[0].minBoostClock;
labels.boostClock[1] = data.maxMin[0].maxBoostClock;
labels.coreCount[0] = data.maxMin[0].minCoreCount;
labels.coreCount[1] = data.maxMin[0].maxCoreCount;



function CpuFilter() {
  const {t} = useTranslation();
  const initialState = {
    manufacturesFilter: "All",
    graphicFilter: "All",
    smtFilter: "All",
    coreCountFilter: labels.coreCount,
    coreClockFilter: labels.coreClock,
    boostClockFilter: labels.boostClock,
    tdpFilter: labels.tdp,
    priceFilter: labels.price,
    coreFamilyFilter: "All",
    socketFilter: "All",
  };

  const reducer = (state, action) => {
    const actionTypes = {
      SET_MANUFACTURES_FILTER: "manufacturesFilter",
      SET_GRAPHIC_FILTER: "graphicFilter",
      SET_COREFAMILY_FILTER: "coreFamilyFilter",
      SET_SOCKET_FILTER: "socketFilter",
      SET_SMT_FILTER: "smtFilter",
      SET_CORECOUNT_FILTER: "coreCountFilter",
      SET_CORECLOCK_FILTER: "coreClockFilter",
      SET_BOOSTCLOCK_FILTER: "boostClockFilter",
      SET_TDP_FILTER: "tdpFilter",
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
      graphic: state.graphicFilter,
      smt: state.smtFilter,
      coreCountMin: state.coreCountFilter[0],
      coreCountMax: state.coreCountFilter[1],
      coreClockMin: state.coreClockFilter[0],
      coreClockMax: state.coreClockFilter[1],
      boostClockMin: state.boostClockFilter[0],
      boostClockMax: state.boostClockFilter[1],
      tdpMin: state.tdpFilter[0],
      tdpMax: state.tdpFilter[1],
      priceMin: state.priceFilter[0],
      priceMax: state.priceFilter[1],
      coreFamily: state.coreFamilyFilter,
      socket: state.socketFilter,
    };

    for (const [key, value] of Object.entries(filters)) {
      searchParams.set(key, value);
    }
  }, [state, setSearchParams, searchParams]);

  const { handleApply, handleReset } = useFilters();

  const handleChange = (filterType, event) => {
    dispatch({ type: `SET_${filterType}_FILTER`, payload: event.target.value });
  };

  return (
    <StyledFilter>
      <StyledFilterButton>
        <Button onClick={() => handleApply(searchParams, setSearchParams)}>
          {t('apply')}
        </Button>
        <Button onClick={() => handleReset(dispatch, "/cpu")}>{t('reset')}</Button>
      </StyledFilterButton>
      <FilterRadioGroup
        name={t("Manufactures")}
        defaultValue={initialState.manufacturesFilter}
        onChange={handleChange}
        handleLabel={"MANUFACTURES"}
        labels={labels.manufactures}
        color={color}
      />
      <FilterRangeSlider
        name={t("Core Count")}
        handleChangeSlider={handleChange}
        handleLabel={"CORECOUNT"}
        value={state.coreCountFilter}
        min={initialState.coreCountFilter[0]}
        max={initialState.coreCountFilter[1]}
      />
      <FilterRangeSlider
        name={t("Core Clock")}
        handleChangeSlider={handleChange}
        handleLabel={"CORECLOCK"}
        value={state.coreClockFilter}
        min={initialState.coreClockFilter[0]}
        max={initialState.coreClockFilter[1]}
      />
      <FilterRangeSlider
        name={t("Boost Clock")}
        handleChangeSlider={handleChange}
        handleLabel={"BOOSTCLOCK"}
        value={state.boostClockFilter}
        min={initialState.boostClockFilter[0]}
        max={initialState.boostClockFilter[1]}
      />
      <FilterRadioGroup
        name={t("Graphic")}
        defaultValue={initialState.graphicFilter}
        handleLabel={"GRAPHIC"}
        onChange={handleChange}
        labels={labels.graphic}
        color={color}
      />
      <FilterRangeSlider
        name={t("TDP")}
        handleChangeSlider={handleChange}
        handleLabel={"TDP"}
        value={state.tdpFilter}
        min={initialState.tdpFilter[0]}
        max={initialState.tdpFilter[1]}
      />
      <FilterRadioGroup
        name={t("SMT")}
        defaultValue={initialState.smtFilter}
        handleLabel={"SMT"}
        onChange={handleChange}
        labels={labels.smt}
        color={color}
      />
      <FilterRangeSlider
        name={t("Price")}
        handleChangeSlider={handleChange}
        handleLabel={"PRICE"}
        value={state.priceFilter}
        min={initialState.priceFilter[0]}
        max={initialState.priceFilter[1]}
      />
      <FilterRadioGroup
        name={t("Core Family")}
        defaultValue={initialState.coreFamilyFilter}
        handleLabel={"COREFAMILY"}
        onChange={handleChange}
        labels={labels.coreFamily}
        color={color}
      ></FilterRadioGroup>
      <FilterRadioGroup
        name={t("Socket")}
        defaultValue={initialState.socketFilter}
        handleLabel={"SOCKET"}
        onChange={handleChange}
        labels={labels.socket}
        color={color}
      ></FilterRadioGroup>
    </StyledFilter>
  );
}

export default CpuFilter;
