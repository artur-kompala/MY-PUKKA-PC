import React, { useEffect } from "react";
import { getFanFilters } from "../../services/apiFan";
import { useSearchParams } from "react-router-dom";
import useFilters from "../useFilters";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import color from "../../styles/color";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import { useTranslation } from "react-i18next";

const labels = {
    manufactures: [{ value: "All", label: "All" }],
    size: [{ value: "All", label: "All" }],
    noise: [],
    flow: [],
    price: [],
  };
  
  const dataFilter = await getFanFilters();
  
  dataFilter.data.manufacture.map((item) =>
    labels.manufactures.push({ value: item, label: item })
  );
  dataFilter.data.size.map((item) =>
    labels.size.push({ value: item, label: item })
  );
  
  labels.noise[0] = dataFilter.data.maxMin[0].minNoise;
  labels.noise[1] = dataFilter.data.maxMin[0].maxNoise;
  labels.flow[0] = dataFilter.data.maxMin[0].minFlow;
  labels.flow[1] = dataFilter.data.maxMin[0].maxFlow;
  labels.price[0] = dataFilter.data.maxMin[0].minPrice;
  labels.price[1] = dataFilter.data.maxMin[0].maxPrice;
  


function FanFilter() {
  const {t} = useTranslation();
    const initialState = {
        manufacturesFilter: "All",
        sizeFilter: "All",
        priceFilter: labels.price,
        noiseFilter: labels.noise,
        flowFilter: labels.flow
      };
    
      const reducer = (state, action) => {
        const actionTypes = {
          SET_MANUFACTURES_FILTER: "manufacturesFilter",
          SET_SIZE_FILTER: "sizeFilter",
          SET_PRICE_FILTER: "priceFilter",
          SET_NOISE_FILTER: "noiseFilter",
          SET_FLOW_FILTER: "flowFilter",
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
          size: state.sizeFilter,
          noiseMin: state.noiseFilter[0],
          noiseMax: state.noiseFilter[1],
          priceMin: state.priceFilter[0],
          priceMax: state.priceFilter[1],
          flowMin: state.flowFilter[0],
          flowMax: state.flowFilter[1],
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
            name={t("Size")}
            defaultValue={initialState.sizeFilter}
            handleLabel={"SIZE"}
            onChange={handleChange}
            labels={labels.size}
            color={color}
          />
          <FilterRangeSlider
            name={t("Flow")}
            handleChangeSlider={handleChange}
            handleLabel={"FLOW"}
            value={state.flowFilter}
            min={initialState.flowFilter[0]}
            max={initialState.flowFilter[1]}
          />
          <FilterRangeSlider
            name={t("Price")}
            handleChangeSlider={handleChange}
            handleLabel={"PRICE"}
            value={state.priceFilter}
            min={initialState.priceFilter[0]}
            max={initialState.priceFilter[1]}
          />
          <FilterRangeSlider
            name={t("Noise")}
            handleChangeSlider={handleChange}
            handleLabel={"NOISE"}
            value={state.noiseFilter}
            min={initialState.noiseFilter[0]}
            max={initialState.noiseFilter[1]}
          />
        </StyledFilter>
      );
}

export default FanFilter
