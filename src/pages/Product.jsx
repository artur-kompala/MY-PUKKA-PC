import { useParams } from "react-router-dom";
import ProductFilter from "../features/product/ProductFilter";
import ProductLayout from "../features/product/ProductLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getOneCPU } from "../services/apiCPU";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

function Product() {
    const {name} = useParams()

    const {   
      isLoading,
      data = {},
      error,
    } = useQuery({
      queryKey: ['cpu', name],
      queryFn: () => getOneCPU({name}),
    });
    
  if(!isLoading){
    return (
        <>
          <Row type="horizontal">
            <Heading as="h1">{name}</Heading>
           
          </Row>
          <ProductLayout name={name} cpu={data.data}/>
        </>
      );
    }else{
       return <Spinner></Spinner>
    }

}

export default Product
