import { t } from "i18next";
import styled from "styled-components";
const StyledSpecsItem = styled.div`
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2rem;
`;
const StyledSpecsBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1.4rem;
`;
function ProductSpecs({ details }) {
  return (
    <StyledSpecsBox>
            <h3>{t("Specification")}</h3>
      {details.specifications.map((item) => (
        <StyledSpecsItem key={item.label}>
          <em >
            {item.label} 
          </em>
          <p style={{color: '#727477'}}>
            {item.value}
          </p>
        </StyledSpecsItem>
      ))}
    </StyledSpecsBox>
  );
}

export default ProductSpecs;
