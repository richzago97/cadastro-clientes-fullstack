import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  button {
    font-size: 15px;
    font-family: Arial;
    width: 100px;
    height: 20px;
    margin-top: 17px;
    border-width: 1px;
    color: #fff;
    border-color: #4e6096;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 0px 0px 2px #9fb4f2;
    text-shadow: 0px 1px 0px #283966;
    background: linear-gradient(rgb(120, 146, 194), #476e9e);
  }

  button:hover {
    background: linear-gradient(#476e9e, rgb(120, 146, 194));
  }
`;
