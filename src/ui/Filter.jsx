import React, { useEffect } from "react";
import styled from "styled-components";
import FilterComponent from "./FilterComponent";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import RangeSlider from "./RangeSlider";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";


const StyledFilter = styled.div`
  background-color: var(--color-grey-100);
  padding: 1.6rem;
  border-radius: var(--border-radius-md);
  display: grid;
  grid-template-columns: 1fr ;
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
};
const initialState = {
  manufacturesFilter: 'All',
  graphicFilter: 'All',
  smtFilter: 'All',
  coreCountFilter: [1, 64],
  coreClockFilter: [1, 6],
  boostClockFilter: [1, 6],
  tdpFilter: [1, 300],
  priceFilter: [0, 4500],
  scoreFilter: [29.7, 131],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MANUFACTURES_FILTER':
      
      return { ...state, manufacturesFilter: action.payload };
    case 'SET_GRAPHIC_FILTER':
      return { ...state, graphicFilter: action.payload };
    case 'SET_SMT_FILTER':
      return { ...state, smtFilter: action.payload };
    case 'SET_CORECOUNT_FILTER':
      return { ...state, coreCountFilter: action.payload };
    case 'SET_CORECLOCK_FILTER':
      return { ...state, coreClockFilter: action.payload };
    case 'SET_BOOSTCLOCK_FILTER':
      return { ...state, boostClockFilter: action.payload };
    case 'SET_TDP_FILTER':
      return { ...state, tdpFilter: action.payload };
    case 'SET_PRICE_FILTER':
      return { ...state, priceFilter: action.payload };
    case 'SET_SCORE_FILTER':
      return { ...state, scoreFilter: action.payload };
    default:
      return state;
  }
};

function Filter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

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
      scoreMin: state.scoreFilter[0],
      scoreMax: state.scoreFilter[1],
    };

    for (const [key, value] of Object.entries(filters)) {
      searchParams.set(key, value);
    }
  }, [state, setSearchParams, searchParams]);

  const handleChange = (filterType,event) => {
    console.log(`SET_${filterType}_FILTER`);
    dispatch({ type: `SET_${filterType}_FILTER`, payload: event.target.value });
  };

  const handleApply = () => {
    setSearchParams(searchParams);
  };
  const handleReset = () =>{
    navigate('/cpu')
  }

  return (
    <StyledFilter>
      <StyledFilterButton>
        <Button onClick={handleApply}>Apply</Button>
        <Button onClick={handleReset}>Reset</Button>
      </StyledFilterButton>
      
      
      
      <FilterComponent name={"Manufactures"}>
        <RadioGroup
          defaultValue="All"
          name="radio-buttons-group"
          onChange={(e)=>handleChange('MANUFACTURES',e)}
        >
          <FormControlLabel
            value="All"
            control={<Radio sx={color} size="large" />}
            label="All"
          />
          <FormControlLabel
            value="AMD"
            control={<Radio sx={color} size="large" />}
            label="AMD"
          />
          <FormControlLabel
            value="Intel"
            control={<Radio sx={color} size="large" />}
            label="Intel"
          />
        </RadioGroup>
      </FilterComponent>

      <FilterComponent name={"Core Count"}>
        <RangeSlider
          handleChangeSlider={(e) => handleChange("CORECOUNT",e)}
          value={state.coreCountFilter}
          max={64}
          min={1}
        ></RangeSlider>
      </FilterComponent>

      <FilterComponent name={"Core Clock"}>
        <RangeSlider
          handleChangeSlider={(e) => handleChange("CORECLOCK",e)}
          value={state.coreClockFilter}
          max={6}
          min={1}
        ></RangeSlider>
      </FilterComponent>

      <FilterComponent name={"Boost Clock"}>
        <RangeSlider
          handleChangeSlider={(e) => handleChange("BOOSTCLOCK",e)}
          value={state.boostClockFilter}
          max={6}
          min={1}
        ></RangeSlider>
      </FilterComponent>

      <FilterComponent name={"Graphic"}>
        <RadioGroup
          defaultValue="All"
          name="radio-buttons-group"
          onChange={(e)=>handleChange('GRAPHIC',e)}
        >
          <FormControlLabel
            value="All"
            control={<Radio sx={color} size="large" />}
            label="All"
          />
          <FormControlLabel
            value="Yes"
            control={<Radio sx={color} size="large" />}
            label="Yes"
          />
          <FormControlLabel
            value="No"
            control={<Radio sx={color} size="large" />}
            label="No"
          />
        </RadioGroup>
      </FilterComponent>

      <FilterComponent name={"TDP"}>
        <RangeSlider
          handleChangeSlider={() => handleChange("TDP")}
          value={initialState.tdpFilter}
          max={300}
          min={1}
        ></RangeSlider>
      </FilterComponent>

      <FilterComponent name={"SMT"}>
        <RadioGroup
          defaultValue="All"
          name="radio-buttons-group"
          onChange={(e)=>handleChange('SMT',e)}
        >
          <FormControlLabel
            value="All"
            control={<Radio sx={color} size="large" />}
            label="All"
          />
          <FormControlLabel
            value={true}
            control={<Radio sx={color} size="large" />}
            label="Yes"
          />
          <FormControlLabel
            value={false}
            control={<Radio sx={color} size="large" />}
            label="No"
          />
        </RadioGroup>
      </FilterComponent>

      <FilterComponent name={"Price"}>
        <RangeSlider
          handleChangeSlider={(e) => handleChange("PRICE",e)}
          value={state.priceFilter}
          min={0}
          max={4500}
        ></RangeSlider>
      </FilterComponent>


      <FilterComponent name="Micrarchitecture"></FilterComponent>
      <FilterComponent name="Core Family"></FilterComponent>
      <FilterComponent name="Socket"></FilterComponent>
    </StyledFilter>
  );
}

export default Filter;
