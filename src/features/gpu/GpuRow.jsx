import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/apiCart";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

function GpuRow({gpu}) {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {name,price,chipset,memory,core_clock,boost_clock,length,manufacture,score,pcie,rps,rt,fg,gid,rank,samples} = gpu;

    function handleClick(type,data){
        addCart(type,data).then(navigate('/builder'))
    }

    return (
        <Table.Row>
            <img style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px',width: '10rem',height: '7rem'}}src={`${manufacture}.svg`} alt={manufacture}></img>
            <div>{rank}</div>
            <div>{chipset}</div>
            <span onClick={()=>navigate(`/product/${gid}?name=${name}&manufacture=${manufacture}&rank=${rank}&samples=${samples}&score=${score}`)}>{name}</span>
            <div>{`${memory}GB`}</div>
            <div>{`${core_clock}Mhz`}</div>
            <div>{`${boost_clock}Mhz`}</div>
            <div>{length || "-"}</div>
            <div>{`${pcie}.0 GEN`}</div>
            <div>{`${rps} W`}</div>
            <div>{rt? t("Yes"): t("No")}</div>
            <div>{fg === "none" ? t("none"): fg}</div>
            <div>{score}</div>
            <div>{price ? `${price}`: "-"}</div>
            <div>
                <Button size='small' onClick={()=>handleClick("gpu",gpu)}>{t('addToBuild')}</Button>
            </div>
        </Table.Row>
    )
}

export default GpuRow
