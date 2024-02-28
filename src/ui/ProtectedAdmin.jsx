import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedAdmin({ children }) {
    const navigate = useNavigate();
  const { isLoading, isAuthenticated,admin} = useUser();

    console.log(admin);
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && admin) navigate("/builder");
    },
    [isAuthenticated, isLoading, navigate,admin]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated && admin) return children;
}

export default ProtectedAdmin
