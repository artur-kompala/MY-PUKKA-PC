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

function ProductBenchmark() {
  
  return (
    <>
      <BenchmarkBox>
        <em>Rank:</em>
        <strong style={colorGrey}>Rank</strong>
      </BenchmarkBox>
      <BenchmarkBox>
        <em>Score:</em>
        <strong style={colorGrey}>bench</strong>
      </BenchmarkBox>
      <BenchmarkBox>
        <em>Samples:</em>
        <strong style={colorGrey}>samp</strong>
      </BenchmarkBox>
    </>
  );
}

export default ProductBenchmark;
