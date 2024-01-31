import styled from "styled-components";

const StyledFilter = styled.div`
  background-color: var(--color-grey-100);
  padding: 1.6rem;
  border-radius: var(--border-radius-md);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const StyledFilterButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;


export {StyledFilter,StyledFilterButton};