import { t } from "i18next";
import styled from "styled-components";

const colorGrey = { color: "#727477" };

const BenchmarkBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;

  display: flex;
  flex-direction: row;
  gap: 2.4rem;
`;

function ProductBenchmark({score,rank,samples}) {
  
  return (
    <>
      <BenchmarkBox>
        <em>{t("Rank")}</em>
        <strong style={colorGrey}>{rank}</strong>
      </BenchmarkBox>
      <BenchmarkBox>
        <em>{t("Score")}</em>
        <strong style={colorGrey}>{score}</strong>
      </BenchmarkBox>
      <BenchmarkBox>
        <em>{t('Samples')}</em>
        <strong style={colorGrey}>{samples}</strong>
      </BenchmarkBox>
    </>
  );
}

export default ProductBenchmark;
