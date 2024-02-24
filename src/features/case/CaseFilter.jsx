import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useFilters from "../useFilters";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import color from "../../styles/color";
import FilterRangeSlider from "../../ui/FilterRangeSlider";
import { getCaseFilters } from "../../services/apiCase";
import { useTranslation } from "react-i18next";

const labels = {
    manufactures: [{ value: "All", label: "All" }],
    type: [{ value: "All", label: "All" }],
    form_factor: [{ value: "All", label: "All" }],
    price: [],
    gpu_length: [],
    cpu_cooler_length: [],
  };
  
  const dataFilter = await getCaseFilters();

  dataFilter.data.manufacture.map((item) =>
    labels.manufactures.push({ value: item, label: item })
  );
  dataFilter.data.form_factor.map((item) =>
    labels.form_factor.push({ value: item, label: item })
  );
  dataFilter.data.type.map((item) =>
    labels.type.push({ value: item, label: item })
  );
  
  labels.gpu_length[0] = dataFilter.data.maxMin[0].minGpuLength;
  labels.gpu_length[1] = dataFilter.data.maxMin[0].maxGpuLength;
  labels.cpu_cooler_length[0] = dataFilter.data.maxMin[0].minCpuLength;
  labels.cpu_cooler_length[1] = dataFilter.data.maxMin[0].maxCpuLength;
  labels.price[0] = dataFilter.data.maxMin[0].minPrice;
  labels.price[1] = dataFilter.data.maxMin[0].maxPrice;
  


function CaseFilter() {
  const {t} = useTranslation();
    const initialState = {
        manufacturesFilter: "All",
        typeFilter: "All",
        form_factorFilter: "All",
        gpu_lengthFilter: labels.gpu_length,
        cpu_cooler_lengthFilter: labels.cpu_cooler_length,
        priceFilter: labels.price,
      };
    
      const reducer = (state, action) => {
        const actionTypes = {
          SET_MANUFACTURES_FILTER: "manufacturesFilter",
          SET_TYPE_FILTER: "typeFilter",
          SET_FORM_FACTOR_FILTER: "form_factorFilter",
          SET_PRICE_FILTER: "priceFilter",
          SET_CPU_COOLER_LENGTH_FILTER: "cpu_cooler_lengthFilter",
          SET_GPU_LENGTH_FILTER: "gpu_lengthFilter",
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
          form_factor: state.form_factorFilter,
          cpu_cooler_lengthMin: state.cpu_cooler_lengthFilter[0],
          cpu_cooler_lengthMax: state.cpu_cooler_lengthFilter[1],
          gpu_lengthMin: state.gpu_lengthFilter[0],
          gpu_lengthMax: state.gpu_lengthFilter[1],
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
            <Button onClick={()=>handleReset(dispatch,'/case')}>{t('reset')}</Button>
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
            name={t("Form factor")}
            defaultValue={initialState.form_factorFilter}
            handleLabel={"FORM_FACTOR"}
            onChange={handleChange}
            labels={labels.form_factor}
            color={color}
          ></FilterRadioGroup>
          <FilterRangeSlider
            name={t("Cpu Cooler Length")}
            handleChangeSlider={handleChange}
            handleLabel={"CPU_COOLER_LENGTH"}
            value={state.cpu_cooler_lengthFilter}
            min={initialState.cpu_cooler_lengthFilter[0]}
            max={initialState.cpu_cooler_lengthFilter[1]}
          />
          <FilterRangeSlider
            name={t("Gpu Length")}
            handleChangeSlider={handleChange}
            handleLabel={"GPU_LENGTH"}
            value={state.gpu_lengthFilter}
            min={initialState.gpu_lengthFilter[0]}
            max={initialState.gpu_lengthFilter[1]}
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

export default CaseFilter
