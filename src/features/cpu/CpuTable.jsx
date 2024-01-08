import Empty from "../../ui/Empty"
import Menus from "../../ui/Menus"
import Table from "../../ui/Table";
import { useState,useEffect } from "react";
import CpuRow from "./CpuRow"

import Spinner from "../../ui/Spinner"
import { getCPU } from '../../services/apiCPU';
import Pagination from "../../ui/Pagination";
import { useCPU } from "./useCPU";




function CpuTable() {
  /*
  const [cpus, setCpus] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const data = await getCPU();
        setCpus(data);
       
        setCount(data.length);
      } catch (error) {
        // Handle errors if needed
      }
    }

    fetchDataAsync();
  }, []);
  */
  const { cpus, isLoading, count } = useCPU();

  if (isLoading) return <Spinner />;

  if (!cpus.length) return <Empty resourceName="cpus" />;
  
    return (
      
        <Menus>
      <Table columns="0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr  0.5fr 8rem">
        <Table.Header>
          <div></div>
          <div>Rank</div>
          <div>Name</div>
          <div>Core count</div>
          <div>Core clock</div>
          <div>Boost clock</div>
          <div>Graphic</div>
          <div>Tdp</div>
          <div>Smt</div>
          <div>Price</div>
          <div>Score</div>
          
        </Table.Header>

        <Table.Body
          data={cpus}
          render={(cpu) => (
            <CpuRow key={cpu._id} cpu={cpu} />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
          
    )
}

export default CpuTable
