import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { t } from "i18next";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal}) {
  
  return (
    <StyledConfirmDelete>
      <Heading as="h3">{`${t('delete')} ${t(resourceName)}`}</Heading>
      <p>
        {`${t('Are you sure')} ${resourceName}`}
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          {t('Cancel')}
        </Button>
        <Button variation="danger" disabled={disabled} onClick={()=>{onConfirm(); onCloseModal();}}>
        {t('delete')}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
