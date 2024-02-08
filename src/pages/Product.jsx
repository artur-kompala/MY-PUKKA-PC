import { useParams } from "react-router-dom";
import ProductFilter from "../features/product/ProductFilter";
import ProductLayout from "../features/product/ProductLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getOneCPU } from "../services/apiCPU";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

function Product() {
    const {gid} = useParams()
    console.log(gid);
    const {   
      isLoading,
      data = {},
      error,
    } = useQuery({
      queryKey: ['cpu', gid],
      queryFn: () => getOneCPU({gid}),
    });
    
  if(!isLoading){
    return (
        <>
          <Row type="horizontal">
            <Heading as="h1">{gid}</Heading>
           
          </Row>
          <ProductLayout gid={gid} cpu={data.data}/>
        </>
      );
    }else{
       return <Spinner></Spinner>
    }

}

export default Product
