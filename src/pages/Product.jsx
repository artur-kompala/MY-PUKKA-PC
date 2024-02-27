import { useParams, useSearchParams } from "react-router-dom";
import ProductLayout from "../features/product/ProductLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Product() {
    const {gid} = useParams()
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name')
    const manufacture = searchParams.get('manufacture')
    const rank = searchParams.get('rank')
    const score = searchParams.get('score')
    const samples = searchParams.get('samples')
    
    return (
        <>
          <Row type="horizontal">
            <Heading as="h1">{`${manufacture} ${name}`}</Heading>
          </Row>
          <ProductLayout gid={gid} rank={rank} score={score} samples={samples} manufacture={manufacture}/>
        </>
      );
}

export default Product
