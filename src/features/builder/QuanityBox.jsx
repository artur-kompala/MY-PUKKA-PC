import styled from "styled-components";
import Button from "../../ui/Button"

function QuanityBox({counter,setCounter,index}) {
    const QuantityStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30% 0;
  align-items: baseline;
`;
    const incrementCounterAtIndex = (index) => {
        const newCounter = [...counter];
        newCounter[index] += 1;
        setCounter(newCounter);
      };
      const decrementCounterAtIndex = (index) => {
        if(counter[index] === 1) return
        const newCounter = [...counter];
        newCounter[index] -= 1;
        setCounter(newCounter);
      };


    return (
            <QuantityStyled>
       
            <Button $size="small" onClick={() => decrementCounterAtIndex(index)}>
              -
            </Button>
            <h3>{counter[index]}</h3>
            <Button $size="small" onClick={() => incrementCounterAtIndex(index)}>
              +
            </Button>
            </QuantityStyled>
    )
}

export default QuanityBox
