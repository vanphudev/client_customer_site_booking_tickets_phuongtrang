import styled from "styled-components";

export const WrapperTypeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #ff4500;
  width: 100%;
  padding: 0px 15px 0px 8px;
  box-sizing: border-box;
  
`;
export const WrapperImage = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  background-color: transparent;
`;

export const WrapperLinkContainer = styled.div`
  display: flex;
  flex-direction: row; 
  padding: 0px 8px;
  height: 35px;
  align-items: center;
  gap: 10px;
  background-color: transparent;
`;

export const WrapperTypeText = styled.span`
  height: 44px;
  font-size: 14px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
