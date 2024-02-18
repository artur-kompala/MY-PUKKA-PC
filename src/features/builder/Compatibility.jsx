import { BsArrowsAngleContract } from "react-icons/bs"
import ProductBox from "../product/ProductBox"
import { useTranslation } from "react-i18next";


function Compatibility({issues}) {
    const {t,i18n} = useTranslation();
    return(
        <>
            <BsArrowsAngleContract />
        <p> {t("compatibilityIssues")}</p>
        {issues.map((item,index)=>{
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

export default Compatibility
