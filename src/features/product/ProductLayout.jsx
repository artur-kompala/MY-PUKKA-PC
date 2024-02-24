import styled from "styled-components";
import PriceChart from "./PriceChart";
import ProductDetails from "./ProductDetails";
import ProductSpecs from "./ProductSpecs";
import ProductBenchmark from "./ProductBenchmark";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../../services/apiProduct";


const StyledProductLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr ;
  grid-template-rows: auto auto auto;
  gap: 2.4rem;
`;

function ProductLayout({gid,rank,samples,score}) {
  const [searchParams] = useSearchParams();
  const last = searchParams.get('last') || '7';

 
    const {   
      isLoading,
      data = {},
      error,
    } = useQuery({
      queryKey: ['product', gid,last],
      queryFn: () => getProduct({gid,last}),
    });
    
    
    
    if(isLoading){
      return <Spinner></Spinner>
    }
    if(!isLoading){
      if(!data[0].data.results[0].content) return <h1>Brak danych</h1>
      const { _id, name, chart, data: query } = data[0]
      return(
        <StyledProductLayout> 
        <ProductDetails details={query.results[0].content}></ProductDetails>
        {rank && score && samples && <ProductBenchmark rank={rank} samples={samples} score={score}></ProductBenchmark>}
        <PriceChart chart={chart} last={last}/>
        <ProductSpecs details={query.results[0].content}></ProductSpecs>
        </StyledProductLayout>
      )
    }else{
      return <h1>Brak informacji</h1>
    }
    
      
    
}

export default ProductLayout;
