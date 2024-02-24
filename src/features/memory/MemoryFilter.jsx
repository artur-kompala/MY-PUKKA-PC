import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useFilters from "../useFilters";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import color from "../../styles/color";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import { getMemoryFilters } from "../../services/apiMemory";
import { useTranslation } from "react-i18next";

const labels = {
    manufactures: [{ value: "All", label: "All" }],
    type: [{ value: "All", label: "All" }],
    speed: [],
    price: [],
    capacity: [],
  };
  
  const dataFilter = await getMemoryFilters();
  
  dataFilter.data.manufacture.map((item) =>
    labels.manufactures.push({ value: item, label: item })
  );
  dataFilter.data.type.map((item) =>
    labels.type.push({ value: item, label: item })
  );
  
  labels.speed[0] = dataFilter.data.maxMin[0].minSpeed;
  labels.speed[1] = dataFilter.data.maxMin[0].maxSpeed;
  labels.price[0] = dataFilter.data.maxMin[0].minPrice;
  labels.price[1] = dataFilter.data.maxMin[0].maxPrice;
  labels.capacity[0] = dataFilter.data.maxMin[0].minCapacity;
  labels.capacity[1] = dataFilter.data.maxMin[0].maxCapacity;
  


function MemoryFilter() {
  const {t} = useTranslation();
    const initialState = {
        manufacturesFilter: "All",
        typeFilter: "All",
        speedFilter: labels.speed,
        priceFilter: labels.price,
        capacityFilter: labels.capacity,
      };
    
      const reducer = (state, action) => {
        const actionTypes = {
          SET_MANUFACTURES_FILTER: "manufacturesFilter",
          SET_TYPE_FILTER: "typeFilter",
          SET_PRICE_FILTER: "priceFilter",
          SET_SPEED_FILTER: "speedFilter",
          SET_CAPACITY_FILTER: "capacityFilter",
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
          speedMin: state.speedFilter[0],
          speedMax: state.speedFilter[1],
          priceMin: state.priceFilter[0],
          priceMax: state.priceFilter[1],
          capacityMin: state.capacityFilter[0],
          capacityMax: state.capacityFilter[1],
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
            <Button onClick={()=>handleReset(dispatch,'/ram')}>{t('reset')}</Button>
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
          <FilterRangeSlider
            name={t("Speed")}
            handleChangeSlider={handleChange}
            handleLabel={"SPEED"}
            value={state.speedFilter}
            min={initialState.speedFilter[0]}
            max={initialState.speedFilter[1]}
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
            name={t("Capcity")}
            handleChangeSlider={handleChange}
            handleLabel={"CAPACITY"}
            value={state.capacityFilter}
            min={initialState.capacityFilter[0]}
            max={initialState.capacityFilter[1]}
          />
        </StyledFilter>
      );
}

export default MemoryFilter
