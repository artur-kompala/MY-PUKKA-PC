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

function ProductLayout({name,cpu}) {
  const [searchParams] = useSearchParams();
  const last = searchParams.get('last') || '7';

 
    const {   
      isLoading,
      data = {},
      error,
    } = useQuery({
      queryKey: ['product', name,last],
      queryFn: () => getProduct({name,last}),
    });
    
    
    
    if(isLoading){
      return <Spinner></Spinner>
    }
    if(!isLoading && data.length !== 0){
      const { _id, name, chart, data: query } = data[0]
      
    
      return(
        <StyledProductLayout>
          
        <ProductDetails details={query.results[0].content}></ProductDetails>
        <ProductBenchmark cpu={cpu}></ProductBenchmark>
        <PriceChart chart={chart} last={last}/>
        <ProductSpecs details={query.results[0].content} cpu={cpu}></ProductSpecs>
        
        
        </StyledProductLayout>
      )
    }else{
      return <h1>Błąd wczytywania</h1>
    }
    
      
    
}

export default ProductLayout;
