import { useState } from 'react';
import Row from './Row';
import styled from 'styled-components';
import { FaArrowUp ,FaArrowDown} from "react-icons/fa";

const FilterName = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 7rem;
    
`
const FilterBox = styled.div`
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-md);
    margin-top: 1rem;
`



const FilterComponent = ({name,children}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <FilterBox>
        <FilterName onClick={toggleExpand} style={{ cursor: 'pointer' }}>
            <p>{name}</p>
            {!isExpanded ? <FaArrowDown /> : <FaArrowUp />}
        </FilterName>
        
        
      
      {isExpanded && (
        <ul>
          {children}
        </ul>
      )}
    </FilterBox>
  );
};

export default FilterComponent;
