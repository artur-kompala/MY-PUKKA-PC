import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/apiCart";
import Button from "../../ui/Button";
import Table from "../../ui/Table";

function CaseRow({cas}) {
    const navigate = useNavigate();
    const {manufacture,name,price,color,type,gid,form_factor,psu,side_panel,
        external_volume,internal_35_bays,gpu_length,
        cpu_cooler_length,fan} = cas;

    function handleClick(type,data){
        addCart(type,data)
        navigate('/builder')
    }
    function countOccurrences(array) {
        // Count occurrences
        const counts = array.reduce((acc, value) => {
          acc[value] = (acc[value] || 0) + 1;
          return acc;
        }, {});
      
        // Convert to array of strings, then to JSX
        const formattedArray = Object.entries(counts).map(([value, count]) => (
          <div key={value}>{`${count}x${value}`}</div>
        ));
      
        return <>{formattedArray}</>;
      }
      function listElementsOnNewLines(array) {
        // Map each element to itself followed by a newline character
        const result = array.map(element => `${element}\n`).join('');
        
        // Return the resulting string
        return result;
      }
      function DisplayList({ items }) {
        return (
          <pre>{listElementsOnNewLines(items)}</pre>
        );
      }

    return (
        <Table.Row>
            <img style={{backgroundColor: 'white', borderRadius: '5px', padding: '5px',width: '10rem',height: '7rem'}}src={`${manufacture}.svg`} alt={manufacture}></img>
            <span onClick={()=>navigate(`/product/${ manufacture + ' '+ name}`)}>{name}</span>
            <div>{type}</div>
            <div><DisplayList items={form_factor}></DisplayList></div>
            <div>{psu ? "Yes" : "No"}</div>
            <div>{side_panel || "-"}</div>
            <div>{external_volume || "-"}</div>
            <div>{internal_35_bays}</div>
            <div>{gpu_length}</div>
            <div>{cpu_cooler_length}</div>
            <div>{countOccurrences(fan)}</div>
            <div style={{display: 'flex',justifyContent: 'start'}}>
                {color.map(item=>{
                    return <div key={item} style={{backgroundColor: item,borderStyle: 'solid', borderColor: '#4338ca', borderWidth: '2px',borderRadius: '1rem',width: "3rem",height: "3rem"}}>&nbsp;</div>
                })}
            </div>
            
            <div>{price ? `${price}`: "-"}</div>
            <div>
                <Button onClick={()=>handleClick("Case",cas)}>+Add to Build</Button>
            </div>
        </Table.Row>
    )
}

export default CaseRow
