import React, { useEffect } from "react";
import { getStorageFilters } from "../../services/apiStorage";
import { useSearchParams } from "react-router-dom";
import useFilters from "../useFilters";
import { StyledFilter, StyledFilterButton } from "../../ui/StyledFilter";
import Button from "../../ui/Button";
import FilterRadioGroup from "../../ui/FilterRadioGroup";
import color from "../../styles/color";
import FilterRangeSlider from "../../ui/FilterRangeSlider";

const labels = {
    manufactures: [{ value: "All", label: "All" }],
    type: [{ value: "All", label: "All" }],
    inter: [{ value: "All", label: "All" }],
    price: [],
    read: [],
    write: [],
    capacity: [],
  };
  
  const dataFilter = await getStorageFilters();
  console.log(dataFilter);
  dataFilter.data.manufacture.map((item) =>
    labels.manufactures.push({ value: item, label: item })
  );
  dataFilter.data.inter.map((item) =>
    labels.inter.push({ value: item, label: item })
  );
  dataFilter.data.type.map((item) =>
    labels.type.push({ value: item, label: item })
  );
  
  labels.price[0] = dataFilter.data.maxMin[0].minPrice;
  labels.price[1] = dataFilter.data.maxMin[0].maxPrice;
  labels.read[0] = dataFilter.data.maxMin[0].minRead;
  labels.read[1] = dataFilter.data.maxMin[0].maxRead;
  labels.write[0] = dataFilter.data.maxMin[0].minWrite;
  labels.write[1] = dataFilter.data.maxMin[0].maxWrite;
  labels.capacity[0] = dataFilter.data.maxMin[0].minCapacity;
  labels.capacity[1] = dataFilter.data.maxMin[0].maxCapacity;

function StorageFilter() {
    const initialState = {
        manufacturesFilter: "All",
        typeFilter: "All",
        interFilter: "All",
        priceFilter: labels.price,
        readFilter: labels.read,
        writeFilter: labels.write,
        capacityFilter: labels.capacity,
      };
    
      const reducer = (state, action) => {
        const actionTypes = {
          SET_MANUFACTURES_FILTER: "manufacturesFilter",
          SET_TYPE_FILTER: "typeFilter",
          SET_INTER_FILTER: "interFilter",
          SET_PRICE_FILTER: "priceFilter",
          SET_READ_FILTER: "readFilter",
          SET_WRITE_FILTER: "writeFilter",
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
          inter: state.interFilter,
          priceMin: state.priceFilter[0],
          priceMax: state.priceFilter[1],
          readMin: state.readFilter[0],
          readMax: state.readFilter[1],
          writeMin: state.writeFilter[0],
          writeMax: state.writeFilter[1],
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
            <Button onClick={()=>handleApply(searchParams,setSearchParams)}>Apply</Button>
            <Button onClick={()=>handleReset(dispatch,'/storage')}>Reset</Button>
          </StyledFilterButton>
          <FilterRadioGroup
            name={"Manufactures"}
            defaultValue={initialState.manufacturesFilter}
            onChange={handleChange}
            handleLabel={"MANUFACTURES"}
            labels={labels.manufactures}
            color={color}
          />
          <FilterRadioGroup
            name={"Type"}
            defaultValue={initialState.typeFilter}
            handleLabel={"TYPE"}
            onChange={handleChange}
            labels={labels.type}
            color={color}
          />
          <FilterRadioGroup
            name={"Interface"}
            defaultValue={initialState.interFilter}
            handleLabel={"INTER"}
            onChange={handleChange}
            labels={labels.inter}
            color={color}
          ></FilterRadioGroup>
          <FilterRangeSlider
            name={"Read"}
            handleChangeSlider={handleChange}
            handleLabel={"READ"}
            value={state.readFilter}
            min={initialState.readFilter[0]}
            max={initialState.readFilter[1]}
          />
          <FilterRangeSlider
            name={"Write"}
            handleChangeSlider={handleChange}
            handleLabel={"WRITE"}
            value={state.writeFilter}
            min={initialState.writeFilter[0]}
            max={initialState.writeFilter[1]}
          />
          <FilterRangeSlider
            name={"Capcity"}
            handleChangeSlider={handleChange}
            handleLabel={"CAPACITY"}
            value={state.capacityFilter}
            min={initialState.capacityFilter[0]}
            max={initialState.capacityFilter[1]}
          />
          <FilterRangeSlider
        name={"Price"}
        handleChangeSlider={handleChange}
        handleLabel={"PRICE"}
        value={state.priceFilter}
        min={initialState.priceFilter[0]}
        max={initialState.priceFilter[1]}
      />
        </StyledFilter>
      );
}

export default StorageFilter
