import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import FilterRadioGroup from "../../ui/FilterRadioGroup";

const StyledFilter = styled.div`
  background-color: var(--color-grey-100);
  padding: 1.6rem;
  border-radius: var(--border-radius-md);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const StyledFilterButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const color = {
  marginX: 2,
  color: "#4f46e5",
  "&.Mui-checked": {
    color: "#4f46e5",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 24,
  },
};

const initialState = {
  manufacturesFilter: "All",
  typeFilter: "All",
  socketFilter: "All",
  tdpFilter: [1, 300],
  priceFilter: [0, 4500],
};

const labels = {
  manufactures: [
    { value: "All", label: "All" },
    { value: "Cooler Master", label: "Cooler Master" },
    { value: "Gigabyte", label: "Gigabyte" },
    { value: "NZXT", label: "NZXT" },
    { value: "Noctua", label: "Noctua" },
    { value: "be quiet!", label: "be quiet!" },
  ],
  type: [
    { value: "All", label: "All" },
    { value: "air", label: "air" },
    { value: "water", label: "water" },
  ],
  socket: [
    { value: "All", label: "All" },
    { value: "AM5", label: "AM5" },
    { value: "LGA1700", label: "LGA1700" },
  ],
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
  }
};

function CpuCoolerFilter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

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

  const handleChange = (filterType,event) => {
    dispatch({ type: `SET_${filterType}_FILTER`, payload: event.target.value });
  };

  const handleApply = () => {
    setSearchParams(searchParams);
  };

  const handleReset = () =>{
    navigate('/cpu-cooler')
    window.location.reload();
  }

  return (
    <StyledFilter>
      <StyledFilterButton>
        <Button onClick={handleApply}>Apply</Button>
        <Button onClick={handleReset}>Reset</Button>
      </StyledFilterButton>   
      <FilterRadioGroup name={"Manufactures"} defaultValue={initialState.manufacturesFilter} onChange={handleChange} handleLabel={'MANUFACTURES'}labels={labels.manufactures} color={color}/>
      <FilterRadioGroup name={"Type"} defaultValue={initialState.typeFilter} handleLabel={'TYPE'}onChange={handleChange} labels={labels.type} color={color}/>
      <FilterRadioGroup name={"Socket"} defaultValue={initialState.socketFilter} handleLabel={"SOCKET"} onChange={handleChange} labels={labels.socket} color={color}></FilterRadioGroup>
      <FilterRangeSlider name={"TDP"} handleChangeSlider={handleChange} handleLabel={'TDP'}value={state.tdpFilter} min={initialState.tdpFilter[0]} max={initialState.tdpFilter[1]} />
      <FilterRangeSlider name={"Price"} handleChangeSlider={handleChange} handleLabel={'PRICE'}value={state.priceFilter} min={initialState.priceFilter[0]} max={initialState.priceFilter[1]} />
    </StyledFilter>
  );
}

export default CpuCoolerFilter;
