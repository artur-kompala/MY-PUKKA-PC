import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName} = user.user_metadata;

  return (
    <StyledUserAvatar>
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
