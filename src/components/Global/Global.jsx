import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
}
body{
    overflow-x :hidden;
    over-flow-y:scroll;
    font-family:Arial, sans-serif;
    padding:0 8rem 0!impotant;
    margin:0 !impotant;
}
`;

const Global = (props) => {
  const { children } = props;
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
export default Global;
