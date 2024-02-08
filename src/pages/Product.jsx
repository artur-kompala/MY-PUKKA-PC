import { useParams } from "react-router-dom";
import ProductLayout from "../features/product/ProductLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Product() {
    const {gid} = useParams()
    /*
    const {   
      isLoading,
      data = {},
      error,
    } = useQuery({
      queryKey: ['cpu', gid],
      queryFn: () => getOneCPU({gid}),
    });
  */
 const isLoading = false;
    
  if(!isLoading){
    
    return (
        <>
          <Row type="horizontal">
            <Heading as="h1"></Heading>
           
          </Row>
          <ProductLayout gid={gid}/>
        </>
      );
    }else{
       return <Spinner></Spinner>
    }

}

export default Product
