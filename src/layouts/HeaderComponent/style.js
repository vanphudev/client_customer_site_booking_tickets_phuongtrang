import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import { Row } from "antd";

// Thiết lập Global Style
export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Inter Tight", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: transparent; 
  }
`;

// Wrapper cho Header
export const WrapperHeader = styled(Row)`
  padding: 0;
  margin: 0;
  background: linear-gradient(to bottom, #ff7f50, #ff4500);
  align-items: center;
  text-align: center;
  width: 100%;
  height: 220px;
  box-sizing: border-box;
  font-family: "Inter Tight", sans-serif;
  position: relative; 
`;

export const WrapperHeaderAccout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #000;
  justify-content: center;
  border-radius: 16px;
  margin-right: 160px;
  padding: 8px;
  width: 176px;
  height: 32px;
  margin-bottom: 150px; 
  background-color: #fff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  box-sizing: border-box;
  font-family: "Inter Tight", sans-serif;
`;

// Wrapper cho Text nhỏ trong Header
export const WrapperHeaderSmall = styled.span`
  font-size: 14px;
  color: #000;
  margin: 0;
  font-family: "Inter Tight", sans-serif;
`;

// Wrapper cho Icon trong Header
export const WrapperHeaderIcon = styled.span`
  font-size: 20px;
  color: #000;
  margin: 0;
  font-family: "Inter Tight", sans-serif;
`;

// Wrapper cho Combobox trong Header
export const WrapperStyleCombobox = styled.div`
  display: flex;
  align-items: center;
  gap: -2.0px;
  margin-bottom: 150px; 
  margin-left: 255px; 
  font-family: "Inter Tight", sans-serif;
  background-color: transparent; 
`;

export const WrapperTextCombobox = styled.div`
  .react-select__control {
    border-color: white;
    box-shadow: none;
    background: transparent;
    &:hover {
      border-color: white;
    }
  }

  .react-select__single-value {
    color: white;
  }

  .react-select__menu {
    background-color: white; 
  }

  .react-select__option {
    color: black; 
    &:hover {
      background-color: #ff7f50; 
    }
  }

  .react-select__option--is-selected {
    background-color: #ff4500; 
    color: white;
  }
`;

// Wrapper cho Text trong Menu

export const WrapperTypeText = styled.span`
  display: inline-flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: 44px;
  font-size: 14px;
  font-weight: bold; 
  padding: 0 100px;
  font-family: "Inter Tight", sans-serif;
  color: #fff;
  white-space: nowrap;

  a {
    position: relative;
    color: #fff;
    text-decoration: none;
    padding: 0 5px; 
    
    &::after {
      content: '';
      position: absolute;
      width: ${props => (props.$active ? '100%' : '0')};
      height: 4px;
      bottom: -6px; 
      left: 0;
      background-color: white;
      transition: width 0.2s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
// Wrapper cho Menu Row
export const WrapperTypeRow = styled(Row)`
  padding: 0;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; 
  max-width: 1200px; 
  background-color: transparent;
  box-sizing: border-box;
  font-family: "Inter Tight", sans-serif;
  display: flex;
  justify-content: space-around; 
`;
export const WrapperTypeImg = styled(Row)`
    padding: 0;
    margin: 0 auto; 
    position: absolute; 
    top: 120%; 
    left: 50%; 
    border-radius: 20px;
    width: 1128px; 
    height: 230px; 
    transform: translate(-50%, -50%); 
    background-color: transparent;
    box-sizing: border-box;
    font-family: "Inter Tight", sans-serif;
    display: flex; 
    justify-content: center;
    transition: all 0.2s ease-in-out; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
        border-radius: 20px; 
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s ease-in-out;
    }

`;

