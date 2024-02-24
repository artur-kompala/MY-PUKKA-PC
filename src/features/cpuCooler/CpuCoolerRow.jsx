import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/apiCart";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

function CpuCoolerRow({cooler}) {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {manufacture,name,price,rpm,noise_level,color,size,type,socket,tdp,gid,led} = cooler;

    function handleClick(type,data){
        addCart(type,data).then(navigate('/builder'))
    }

    return (
        <Table.Row>
            <img style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px',width: '10rem',height: '7rem'}}src={`${manufacture}.svg`} alt={manufacture}></img>
            <span onClick={()=>navigate(`/product/${gid}?name=${name}&manufacture=${manufacture}`)}>{name}</span>
            <div>{`${rpm[0]}-${rpm[1]}`}</div>
            <div>{`${noise_level[0]}-${noise_level[1]} dB`}</div>
            <div>{type === 'air' ? t('air'): t('water')}</div>
            <div>{tdp || "-"}</div>
            <div>{led? t("Yes") : t("No")}</div>
            <div style={{display: 'flex',justifyContent: 'start'}}>
                {color.map(item=>{
                    return <div key={item} style={{backgroundColor: item,borderStyle: 'solid', borderColor: '#4338ca', borderWidth: '2px',borderRadius: '1rem',width: "3rem",height: "3rem"}}>&nbsp;</div>
                })}
            </div>
            
            <div>{price ? `${price}`: "-"}</div>
            <div>
                <Button size='small' onClick={()=>handleClick("cooler",cooler)}>{t('addToBuild')}</Button>
            </div>
        </Table.Row>
    )
}

export default CpuCoolerRow
