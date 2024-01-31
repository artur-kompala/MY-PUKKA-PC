import React, { useEffect} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import color from "../../styles/color";


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
  coreFamilyFilter: 'All',
  socketFilter: 'All'
};

const labels = {
  manufactures : [
    { value: "All", label: "All" },
    { value: "AMD", label: "AMD" },
    { value: "Intel", label: "Intel" },
  ],
  graphic : [
    { value: "All", label: "All" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ],
  smt : [
    { value: "All", label: "All" },
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ],
  coreFamily : [
    { value: "All", label: "All" },
    { value: 'Raptor Lake', label: "Raptor Lake" },
    { value: 'Zen 4', label: "Zen 4" },
  ],
  socket : [
    { value: "All", label: "All" },
    { value: 'AM5', label: "AM5" },
    { value: 'LGA1700', label: "LGA1700" },
  ]

}


const reducer = (state, action) => {
  const actionTypes = {
    SET_MANUFACTURES_FILTER: 'manufacturesFilter',
    SET_GRAPHIC_FILTER: 'graphicFilter',
    SET_COREFAMILY_FILTER: 'coreFamilyFilter',
    SET_SOCKET_FILTER: 'socketFilter',
    SET_SMT_FILTER: 'smtFilter',
    SET_CORECOUNT_FILTER: 'coreCountFilter',
    SET_CORECLOCK_FILTER: 'coreClockFilter',
    SET_BOOSTCLOCK_FILTER: 'boostClockFilter',
    SET_TDP_FILTER: 'tdpFilter',
    SET_PRICE_FILTER: 'priceFilter',
    SET_SCORE_FILTER: 'scoreFilter',
  };
  if (action.type in actionTypes) {
    const filterKey = actionTypes[action.type];
    return { ...state, [filterKey]: action.payload };
  }
};

function CpuFilter() {
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
      coreFamily:state.coreFamilyFilter,
      socket: state.socketFilter

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
      <FilterRadioGroup name={"Manufactures"} defaultValue={initialState.manufacturesFilter} onChange={handleChange} handleLabel={'MANUFACTURES'}labels={labels.manufactures} color={color}/>
      <FilterRangeSlider name={"Core Count"} handleChangeSlider={handleChange} handleLabel={'CORECOUNT'} value={state.coreCountFilter} min={initialState.coreCountFilter[0]} max={initialState.coreCountFilter[1]} />
      <FilterRangeSlider name={"Core Clock"} handleChangeSlider={handleChange} handleLabel={'CORECLOCK'} value={state.coreClockFilter} min={initialState.coreClockFilter[0]} max={initialState.coreClockFilter[1]} />
      <FilterRangeSlider name={"Boost Clock"} handleChangeSlider={handleChange} handleLabel={'BOOSTCLOCK'} value={state.boostClockFilter} min={initialState.boostClockFilter[0]} max={initialState.boostClockFilter[1]} />
      <FilterRadioGroup name={"Graphic"} defaultValue={initialState.graphicFilter} handleLabel={'GRAPHIC'}onChange={handleChange} labels={labels.graphic} color={color}/>
      <FilterRangeSlider name={"TDP"} handleChangeSlider={handleChange} handleLabel={'TDP'}value={state.tdpFilter} min={initialState.tdpFilter[0]} max={initialState.tdpFilter[1]} />
      <FilterRadioGroup name={"SMT"} defaultValue={initialState.smtFilter} handleLabel={'SMT'}onChange={handleChange} labels={labels.smt} color={color}/>
      <FilterRangeSlider name={"Price"} handleChangeSlider={handleChange} handleLabel={'PRICE'}value={state.priceFilter} min={initialState.priceFilter[0]} max={initialState.priceFilter[1]} />
      <FilterRadioGroup name={"Core Family"} defaultValue={initialState.coreFamilyFilter} handleLabel={"COREFAMILY"} onChange={handleChange} labels={labels.coreFamily} color={color}></FilterRadioGroup>
      <FilterRadioGroup name={"Socket"} defaultValue={initialState.socketFilter} handleLabel={"SOCKET"} onChange={handleChange} labels={labels.socket} color={color}></FilterRadioGroup>
    </StyledFilter>
  );
}

export default CpuFilter;
