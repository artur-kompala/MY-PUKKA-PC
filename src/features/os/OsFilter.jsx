import React, { useEffect } from "react";
import { getOsFilters } from "../../services/apiOs";
import { useSearchParams } from "react-router-dom";
import useFilters from "../useFilters";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import color from "../../styles/color";
import { useTranslation } from "react-i18next";

const labels = {
    max_memory: [{ value: "All", label: "All" }],
    price: [],
  };
  
  const dataFilter = await getOsFilters();
  
  dataFilter.data.max_memory.map((item) =>
    labels.max_memory.push({ value: item, label: item })
  );
  
  labels.price[0] = dataFilter.data.maxMin[0].minPrice;
  labels.price[1] = dataFilter.data.maxMin[0].maxPrice;
  
function OsFilter() {
  const {t} = useTranslation();
    const initialState = {
        max_memoryFilter: "All",
        priceFilter: labels.price,
      };
    
      const reducer = (state, action) => {
        const actionTypes = {
          SET_MAX_MEMORY_FILTER: "max_memoryFilter",
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
          max_memory: state.max_memoryFilter,
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
            <Button onClick={()=>handleReset(dispatch,'/os')}>{t('reset')}</Button>
          </StyledFilterButton>
          <FilterRadioGroup
            name={t("Max memory")}
            defaultValue={initialState.max_memoryFilter}
            onChange={handleChange}
            handleLabel={"MAX_MEMORY"}
            labels={labels.max_memory}
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
        </StyledFilter>
      );
}

export default OsFilter
