import React, { useState,useEffect } from "react";
import styled from "styled-components";
import FilterComponent from "./FilterComponent";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import RangeSlider from "./RangeSlider";
import { useSearchParams} from "react-router-dom";
import Button from "./Button";

const StyledFilter = styled.div`
  background-color: var(--color-grey-100);
  padding: 1.6rem;
  border-radius: var(--border-radius-md);
`;

const color = {
  marginX: 2,
  color: "#4f46e5",
  "&.Mui-checked": {
    color: "#4f46e5",
  },
};
function Filter() {
  const [manufacturesFilter, setManufacturesFilter] = useState('All');
  const [graphicFilter, setGraphicFilter] = useState('All');
  const [smtFilter, setSmtFilter] = useState('All');
  const [coreCountFilter, setCoreCountFilter] = React.useState([1, 64]);
  const [coreClockFilter, setCoreClockFilter] = React.useState([1, 5]);
  const [boostClockFilter, setBoostClockFilter] = React.useState([1, 5]);
  const [tdpFilter, setTdpFilter] = React.useState([1, 200]);
  const [priceFilter, setPriceFilter] = React.useState([0, 4500]);
  const [scoreFilter, setScoreFilter] = React.useState([29.7, 131]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    
    searchParams.set('manufactures', manufacturesFilter);
    searchParams.set('graphic', graphicFilter);
    searchParams.set('smt', smtFilter);

    searchParams.set('coreCountMin', coreCountFilter[0]);
    searchParams.set('coreCountMax', coreCountFilter[1]);

    searchParams.set('coreClockMin', coreClockFilter[0]);
    searchParams.set('coreClockMax', coreClockFilter[1]);

    searchParams.set('boostClockMin', boostClockFilter[0]);
    searchParams.set('boostClockMax', boostClockFilter[1]);

    searchParams.set('tdpMin', tdpFilter[0]);
    searchParams.set('tdpMax', tdpFilter[1]);

    searchParams.set('priceMin', priceFilter[0]);
    searchParams.set('priceMax', priceFilter[1]);

    searchParams.set('scoreMin', scoreFilter[0]);
    searchParams.set('scoreMax', scoreFilter[1]);
    
    
    
  }, [manufacturesFilter, coreCountFilter,coreClockFilter,boostClockFilter,tdpFilter,priceFilter,scoreFilter,graphicFilter,smtFilter,setSearchParams,searchParams]);

  const handleManufacturesChange = (event) => {
    setManufacturesFilter(event.target.value);
  };
  const handleGraphicChange = (event) => {
    setGraphicFilter(event.target.value);
  };
  const handleSmtChange = (event) => {
    setSmtFilter(event.target.value);
  };

  const handleChangeSliderCount = (event, newValue) => {
      setCoreCountFilter(newValue);
  };
  const handleChangeSliderClock = (event, newValue) => {
    setCoreClockFilter(newValue);
  };
  const handleChangeSliderBoost = (event, newValue) => {
    setBoostClockFilter(newValue)
  };
  const handleChangeSliderTdp = (event, newValue) => {
    setTdpFilter(newValue)
  };
  const handleChangeSliderPrice = (event, newValue) => {
    setPriceFilter(newValue)
  };
  const handleChangeSliderScore = (event, newValue) => {
    setScoreFilter(newValue)
  };
  const handleApply = () =>{
    setSearchParams(searchParams);
  }
  
  

  return (
    <StyledFilter>
      
      <Button onClick={handleApply}>Apply Filters</Button>
      
      
      <FilterComponent name={"Manufactures"}>
        <RadioGroup defaultValue="All" name="radio-buttons-group" onChange={handleManufacturesChange}>
          <FormControlLabel
            value="All"
            control={<Radio sx={color} size="large"/>}
            label="All"
          />
          <FormControlLabel
            value="AMD"
            control={<Radio sx={color} size="large"/>}
            label="AMD"
          />
          <FormControlLabel
            value="Intel"
            control={<Radio sx={color} size="large"/>}
            label="Intel"
          />
        </RadioGroup>
      </FilterComponent>


      <FilterComponent name={"Core Count"}>
        <RangeSlider handleChangeSlider={handleChangeSliderCount} value={coreCountFilter} max={64} min={1}></RangeSlider>
      </FilterComponent>


      <FilterComponent name={"Core Clock"}>
        <RangeSlider handleChangeSlider={handleChangeSliderClock} value={coreClockFilter} max={5} min={1}></RangeSlider>
      </FilterComponent>


      <FilterComponent name={"Boost Clock"}>
        <RangeSlider handleChangeSlider={handleChangeSliderBoost} value={boostClockFilter} max={5} min={1}></RangeSlider>
      </FilterComponent>

      <FilterComponent name={"Graphic"}>
        <RadioGroup defaultValue="All" name="radio-buttons-group" onChange={handleGraphicChange}>
          <FormControlLabel value="All" control={<Radio sx={color} size="large"/>} label="All" />
          <FormControlLabel value="Yes" control={<Radio sx={color} size="large"/>} label="Yes" />
          <FormControlLabel value="No" control={<Radio sx={color} size="large"/>} label="No" />
        </RadioGroup>
      </FilterComponent>


      <FilterComponent name={"TDP"}>
        <RangeSlider handleChangeSlider={handleChangeSliderTdp} value={tdpFilter} max={200} min={1}></RangeSlider>
      </FilterComponent>


      <FilterComponent name={"SMT"}>
        <RadioGroup defaultValue="All" name="radio-buttons-group" onChange={handleSmtChange}>
          <FormControlLabel value="All" control={<Radio sx={color} size="large"/>} label="All" />
          <FormControlLabel value={true} control={<Radio sx={color} size="large"/>} label="Yes" />
          <FormControlLabel value={false} control={<Radio sx={color} size="large"/>} label="No" />
        </RadioGroup>
      </FilterComponent>


      <FilterComponent name={"Price"} >
        <RangeSlider handleChangeSlider={handleChangeSliderPrice} value={priceFilter} min={0} max={4500}></RangeSlider>
      </FilterComponent>


      <FilterComponent name={"Score"}>
        <RangeSlider handleChangeSlider={handleChangeSliderScore} value={scoreFilter} max={131} min={29.7}></RangeSlider>
      </FilterComponent>
      <FilterComponent name="Micrarchitecture"></FilterComponent>
      <FilterComponent name="Core Family"></FilterComponent>
      <FilterComponent name="Socket"></FilterComponent>
    </StyledFilter>
  );
}

export default Filter;
