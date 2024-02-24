import React, { useEffect } from "react";
import { getGpuFilters } from "../../services/apiGpu";
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
    chipset: [{ value: "All", label: "All" }],
    pcie: [{ value: "All", label: "All" }],
    fg: [{ value: "All", label: "All" }],
    price: [],
    memory: []
  };
  
  const dataFilter = await getGpuFilters();
  
  dataFilter.data.manufacture.map((item) =>
    labels.manufactures.push({ value: item, label: item })
  );
  dataFilter.data.pcie.map((item) =>
    labels.pcie.push({ value: item, label: item })
  );
  dataFilter.data.chipset.map((item) =>
    labels.chipset.push({ value: item, label: item })
  );
  dataFilter.data.fg.map((item) =>
    labels.fg.push({ value: item, label: item })
  );
  
  labels.price[0] = dataFilter.data.maxMin[0].minPrice;
  labels.price[1] = dataFilter.data.maxMin[0].maxPrice;
  labels.memory[0] = dataFilter.data.maxMin[0].minMemory;
  labels.memory[1] = dataFilter.data.maxMin[0].maxMemory;
  


function GpuFilter() {
  const {t} = useTranslation();
    const initialState = {
        manufacturesFilter: "All",
        chipsetFilter: "All",
        pcieFilter: "All",
        fgFilter: "All",
        priceFilter: labels.price,
        memoryFilter: labels.memory,
      };
    
      const reducer = (state, action) => {
        const actionTypes = {
          SET_MANUFACTURES_FILTER: "manufacturesFilter",
          SET_CHIPSET_FILTER: "chipsetFilter",
          SET_PCIE_FILTER: "pcieFilter",
          SET_FG_FILTER: "fgFilter",
          SET_PRICE_FILTER: "priceFilter",
          SET_MEMORY_FILTER: "memoryFilter",
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
          chipset: state.chipsetFilter,
          pcie: state.pcieFilter,
          fg: state.fgFilter,
          priceMin: state.priceFilter[0],
          priceMax: state.priceFilter[1],
          memoryMin: state.memoryFilter[0],
          memoryMax: state.memoryFilter[1],
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
            <Button onClick={()=>handleReset(dispatch,'/gpu')}>{t('reset')}</Button>
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
            name={t("Chipset")}
            defaultValue={initialState.chipsetFilter}
            handleLabel={"CHIPSET"}
            onChange={handleChange}
            labels={labels.chipset}
            color={color}
          />
          <FilterRadioGroup
            name={t("PCIe")}
            defaultValue={initialState.pcieFilter}
            handleLabel={"PCIE"}
            onChange={handleChange}
            labels={labels.pcie}
            color={color}
          ></FilterRadioGroup>
          <FilterRadioGroup
            name={t("Frame Genertor")}
            defaultValue={initialState.fgFilter}
            handleLabel={"FG"}
            onChange={handleChange}
            labels={labels.fg}
            color={color}
          ></FilterRadioGroup>
          <FilterRangeSlider
            name={t("Memory")}
            handleChangeSlider={handleChange}
            handleLabel={"MEMORY"}
            value={state.memoryFilter}
            min={initialState.memoryFilter[0]}
            max={initialState.memoryFilter[1]}
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

export default GpuFilter
