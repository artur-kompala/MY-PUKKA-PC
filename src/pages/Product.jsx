import { useParams } from "react-router-dom";
import ProductFilter from "../features/product/ProductFilter";
import ProductLayout from "../features/product/ProductLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Product() {
    const {name} = useParams()
    
    return (
        <>
          <Row type="horizontal">
            <Heading as="h1">{name}</Heading>
            <ProductFilter/>
          </Row>
    
          <ProductLayout name={name}/>
        </>
      );
}

export default Product
