import styled from "styled-components";
import ProductBox from "./ProductBox"
import Button  from "../../ui/Button";
import {useNavigate } from "react-router-dom";
const Img = styled.img`
    
    border-radius: var(--border-radius-md);
    
`
const ShopBox = styled.div`
    background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 0rem 1.2rem;
  display: grid;
  grid-template-columns: 1fr  1.0fr 1.5fr;
    
    
`
function ProductDetails({details}) {
   const imgSrc = details.image_url
   const navigate = useNavigate();
   function displayFirstTwoSentences(text) {
  
    const sentences = text.split('. ');

    
    if (sentences.length >= 2) {
        return sentences[0] + '. ' + sentences[1] + '.';
    } else {
        return text;
    }
    
    }
    const sortedOffers = details.offers.sort((a, b) => a.price - b.price).slice(0,3);

    return (
        <>
        <ProductBox>
            <img src={imgSrc} referrerPolicy="no-referrer" width={300} alt="Zdjęcie produktu"/>
        </ProductBox>
        <ProductBox>
            <h3>Description:</h3>
            <p>{displayFirstTwoSentences(details.description)}</p>
        </ProductBox>
        <ProductBox>
            <h3>Cheapest shop:</h3>
                {sortedOffers.map((shop,index)=>(
                    <ShopBox key={index}>
                        <em>{shop.shop_name}</em>   
                        <strong style={{color: '#727477'}}>{shop.price} {shop.currency}</strong>
                        <Button onClick={()=>window.location.assign(shop.url)}>Go to Shop</Button>
                    </ShopBox>
                ))}      
        </ProductBox>
        </>
        
    )
}

export default ProductDetails
