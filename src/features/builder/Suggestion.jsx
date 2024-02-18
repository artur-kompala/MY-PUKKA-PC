import { FaRegLightbulb } from "react-icons/fa"
import ProductBox from "../product/ProductBox"
import { useTranslation } from "react-i18next";

function Suggestion({sugestion}) {
    const {t,i18n} = useTranslation();
    return (
        <>
            <FaRegLightbulb />
        <p> {t("suggestion")}</p>
        {sugestion.map((item,index)=>{
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
