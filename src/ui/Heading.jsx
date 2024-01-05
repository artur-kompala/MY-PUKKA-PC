import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      overflow: hidden; 
      border-right: 0.15em solid var(--color-brand-700); 
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: 0.15em; 
      animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }

      
      @keyframes blink-caret {
        from,
        to {
          border-color: transparent;
        }
        50% {
          border-color: var(--color-brand-700);
        }
      }
    `}
    
  line-height: 1.4;
`;

export default Heading;
