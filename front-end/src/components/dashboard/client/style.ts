import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p,
  h3 {
    color: white;
  }
  border-bottom: 2px dashed #1c6ea4;
  width: 100%;
  padding: 12px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background-color: rgba(23, 26, 32, 0.8);
    border: none;
    border-radius: 6px;
    color: #fff;
    flex-grow: 1;
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    font-size: 15px;
    height: 36px;
    line-height: 20px;
    margin-left: 8px;
    margin-right: 6px;
    min-width: 185px;
    padding: 0 16px 0 16px;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(23, 26, 32, 1);
    cursor: pointer;
  }
`;
