import { FaRegLightbulb } from "react-icons/fa"
import ProductBox from "../product/ProductBox"
import { useTranslation } from "react-i18next";

function Suggestion({suggestion}) {
    const {t} = useTranslation();
    
    
    return (
        <>
            <FaRegLightbulb />
        <p> {t("suggestion")}</p>
        {suggestion.map((item,index)=>{
          return (
          <ProductBox key={index}>
          <h3>{item.component}</h3>
          <p>{item.desc}</p>
        </ProductBox>
          )
        })}
        </>
    )
}

export default Suggestion
