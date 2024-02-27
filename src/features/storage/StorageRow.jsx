import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { addCart } from "../../services/apiCart";
import Table from "../../ui/Table";
import { useTranslation } from "react-i18next";

function StorageRow({storage}) {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {name,price,manufacture,score,capacity,type,cache,form_factor,read,write,gid,rank} = storage;

    function handleClick(type,data){
        addCart(type,data).then(navigate('/builder'))
    }

    return (
        <Table.Row>
            <img style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px',width: '10rem',height: '7rem'}}src={`${manufacture}.svg`} alt={manufacture}></img>
            <div>{rank}</div>
            <span onClick={()=>navigate(`/product/${gid}`)}>{name}</span>
            <div>{`${capacity}GB`}</div>
            <div>{type}</div>
            <div>{cache ? `${cache}`: "-"}</div>
            <div>{form_factor}</div>
            <div>{read}</div>
            <div>{write}</div>
            <div>{score ? `${score}`: "-"}</div>
            <div>{price ? `${price}`: "-"}</div>
            <div>
                <Button size='small' onClick={()=>handleClick("storage",storage)}>{t('addToBuild')}</Button>
            </div>
        </Table.Row>
    )
}

export default StorageRow
