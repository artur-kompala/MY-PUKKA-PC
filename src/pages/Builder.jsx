import BuilderTable from "../features/builder/BuilderTable"
import BuilderOperations from "../features/builder/BuilderOperations"
import { useState } from "react"
import Row from "../ui/Row"
import { useQuery } from "@tanstack/react-query"
import { getCart } from "../services/apiCart"
import Spinner from "../ui/Spinner"
function Builder() {

    const [totalCost,setTotalCost] = useState(0)
    const [totalPower,setTotalPower] = useState(0)
    const [counter,setCounter] = useState([1,1,1])

    const { isLoading, data = {}, error, refetch } = useQuery({
        queryKey: ["cart"],
        queryFn: () => getCart(),
      });
    if(isLoading || error){
        return <Spinner></Spinner>
    }else{
       
        return (
            <Row type='horizontal'>
                {!isLoading && !error && <BuilderTable setTotalCost={setTotalCost} setTotalPower={setTotalPower} isLoading={isLoading} data={data} refetch={refetch} counter={counter} setCounter={setCounter}></BuilderTable>}
                {!isLoading && !error && <BuilderOperations totalCost={totalCost} totalPower={totalPower} data={data} refetch={refetch}></BuilderOperations>}
            </Row>
        )
    }
    
}

export default Builder
