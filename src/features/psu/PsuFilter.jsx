import React, { useEffect } from "react";
import { getPsuFilters } from "../../services/apiPsu";
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
    type: [{ value: "All", label: "All" }],
    efficiency: [{ value: "All", label: "All" }],
    wattage: [],
    price: [],
  };
  
  const dataFilter = await getPsuFilters();
  
  dataFilter.data.manufacture.map((item) =>
    labels.manufactures.push({ value: item, label: item })
  );
  dataFilter.data.efficiency.map((item) =>
    labels.efficiency.push({ value: item, label: item })
  );
  dataFilter.data.type.map((item) =>
    labels.type.push({ value: item, label: item })
  );
  
  labels.wattage[0] = dataFilter.data.maxMin[0].minWattage;
  labels.wattage[1] = dataFilter.data.maxMin[0].maxWattage;
  labels.price[0] = dataFilter.data.maxMin[0].minPrice;
  labels.price[1] = dataFilter.data.maxMin[0].maxPrice;
  

function PsuFilter() {
  const {t} = useTranslation();
    const initialState = {
        manufacturesFilter: "All",
        typeFilter: "All",
        efficiencyFilter: "All",
        wattageFilter: labels.wattage,
        priceFilter: labels.price,
      };
    
      const reducer = (state, action) => {
        const actionTypes = {
          SET_MANUFACTURES_FILTER: "manufacturesFilter",
          SET_TYPE_FILTER: "typeFilter",
          SET_EFFICIENCY_FILTER: "efficiencyFilter",
          SET_PRICE_FILTER: "priceFilter",
          SET_WATTAGE_FILTER: "wattageFilter",
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
          efficiency: state.efficiencyFilter,
          wattageMin: state.wattageFilter[0],
          wattageMax: state.wattageFilter[1],
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
            <Button onClick={()=>handleReset(dispatch,'/psu')}>{t('reset')}</Button>
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
            name={t("Efficiency")}
            defaultValue={initialState.efficiencyFilter}
            handleLabel={"SOCKET"}
            onChange={handleChange}
            labels={labels.efficiency}
            color={color}
          ></FilterRadioGroup>
          <FilterRangeSlider
            name={t("Wattge")}
            handleChangeSlider={handleChange}
            handleLabel={"WATTGE"}
            value={state.wattageFilter}
            min={initialState.wattageFilter[0]}
            max={initialState.wattageFilter[1]}
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

export default PsuFilter
