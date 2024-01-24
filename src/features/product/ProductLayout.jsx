import styled from "styled-components";
import PriceChart from "./PriceChart";
import ProductDetails from "./ProductDetails";
import ProductSpecs from "./ProductSpecs";
import ProductBenchmark from "./ProductBenchmark";
import { getProduct } from "../../services/apiProduct";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";


const StyledProductLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr ;
  grid-template-rows: auto auto auto;
  gap: 2.4rem;
`;

function ProductLayout({name,cpu}) {
    const {   
      isLoading,
      data = {},
      error,
    } = useQuery({
      queryKey: ['product', name],
      queryFn: () => getProduct({name}),
    });
    
    
    
    if(isLoading){
      return <Spinner></Spinner>
    }
    if(!isLoading && data.length !== 0){
      const { _id, name, price, date, data: query } = data[0]
      
     
      return(
        <StyledProductLayout>
        <ProductDetails details={query.results[0].content}></ProductDetails>
        <ProductBenchmark cpu={cpu}></ProductBenchmark>
        <PriceChart price={price} numDays={date} />
        <ProductSpecs details={query.results[0].content} cpu={cpu}></ProductSpecs>
        </StyledProductLayout>

      )
    }else{
      return <h1>Błąd wczytywania</h1>
    }
    
      
    
}

export default ProductLayout;
