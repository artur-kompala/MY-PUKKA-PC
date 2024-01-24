import React, { useEffect} from "react";
import styled from "styled-components";
import FilterComponent from "../../ui/FilterComponent";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import FilterRangeSlider from "../../ui/FilterRangeSlider";


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
  '& .MuiSvgIcon-root': {
    fontSize: 24,
  }
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

const labelsManufactures = [
  { value: "All", label: "All" },
  { value: "AMD", label: "AMD" },
  { value: "Intel", label: "Intel" },
];

const labelsGraphic = [
  { value: "All", label: "All" },
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const labelsSMT = [
  { value: "All", label: "All" },
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

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
    dispatch({ type: `SET_${filterType}_FILTER`, payload: event.target.value });
  };

  const handleApply = () => {
    setSearchParams(searchParams);
  };
  const handleReset = () =>{
    navigate('/cpu')
    window.location.reload();
  }

  return (
    <StyledFilter>
      <StyledFilterButton>
        <Button onClick={handleApply}>Apply</Button>
        <Button onClick={handleReset}>Reset</Button>
      </StyledFilterButton>   
      <FilterRadioGroup name={"Manufactures"} defaultValue={initialState.manufacturesFilter} onChange={handleChange} handleLabel={'MANUFACTURES'}labels={labelsManufactures} color={color}/>
      <FilterRangeSlider name={"Core Count"} handleChangeSlider={handleChange} handleLabel={'CORECOUNT'} value={state.coreCountFilter} min={initialState.coreCountFilter[0]} max={initialState.coreCountFilter[1]} />
      <FilterRangeSlider name={"Core Clock"} handleChangeSlider={handleChange} handleLabel={'CORECLOCK'} value={state.coreClockFilter} min={initialState.coreClockFilter[0]} max={initialState.coreClockFilter[1]} />
      <FilterRangeSlider name={"Boost Clock"} handleChangeSlider={handleChange} handleLabel={'BOOSTCLOCK'} value={state.boostClockFilter} min={initialState.boostClockFilter[0]} max={initialState.boostClockFilter[1]} />
      <FilterRadioGroup name={"Graphic"} defaultValue={initialState.graphicFilter} handleLabel={'GRAPHIC'}onChange={handleChange} labels={labelsGraphic} color={color}/>
      <FilterRangeSlider name={"TDP"} handleChangeSlider={handleChange} handleLabel={'TDP'}value={state.tdpFilter} min={initialState.tdpFilter[0]} max={initialState.tdpFilter[1]} />
      <FilterRadioGroup name={"SMT"} defaultValue={initialState.smtFilter} handleLabel={'SMT'}onChange={handleChange} labels={labelsSMT} color={color}/>
      <FilterRangeSlider name={"Price"} handleChangeSlider={handleChange} handleLabel={'PRICE'}value={state.priceFilter} min={initialState.priceFilter[0]} max={initialState.priceFilter[1]} />
      <FilterComponent name="Micrarchitecture"></FilterComponent>
      <FilterComponent name="Core Family"></FilterComponent>
      <FilterComponent name="Socket"></FilterComponent>
    </StyledFilter>
  );
}

export default Filter;
