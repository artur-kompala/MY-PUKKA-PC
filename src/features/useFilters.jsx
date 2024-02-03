import {useNavigate } from "react-router-dom";



function useFilters() {
    
const navigate = useNavigate();

const handleApply = (searchParams,setSearchParams) => {
    setSearchParams(searchParams);
};

const handleReset = (dispatch,adress) => {
    navigate(adress);
    dispatch({ type: 'reset' });
};

return {handleApply, handleReset };
}

export default useFilters
