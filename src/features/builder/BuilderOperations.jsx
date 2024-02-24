import styled from "styled-components";
import ProductBox from "../product/ProductBox";
import { useCompatibility } from "./useCompatibility";
import { useTranslation } from "react-i18next";
import {useSugestion} from "./useSugestion"
import Compatibility from "./Compatibility";
import Suggestion from "./Suggestion";

function BuilderOperations({ totalCost, totalPower,data}) {
  const {t,i18n} = useTranslation();
    const issues = useCompatibility(data[0],totalPower)
    const sugestion = useSugestion(data[0],totalPower)
  
  const StyledBuilderLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 2.4rem;
    width: 100%;
    max-width: 50%;
  `;
  return (
    <StyledBuilderLayout>
      <ProductBox>
        <p>
          {t("totalCostLabel")} <strong>{totalCost.toFixed(2)} PLN</strong>
        </p>
      </ProductBox>
      <ProductBox>
        <p>
        {t("powerUsageLabel")} <strong>{totalPower.toFixed(0)} W</strong>
        </p>
      </ProductBox>
      <ProductBox>
        <Compatibility issues={issues}></Compatibility>
      </ProductBox>
      <ProductBox>
        <Suggestion sugestion={sugestion}></Suggestion>
      </ProductBox>
    </StyledBuilderLayout>
  );

  }
export default BuilderOperations;
