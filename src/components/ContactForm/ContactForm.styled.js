import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  width: 450px;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 7px 7px 15px #bbcfda, -4px -4px 13px #fff,
    inset 4px 4px 8px rgba(209, 217, 230, 0.2),
    inset -8px -8px 8px rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: #e8eff5;
`;

export const FieldName = styled.p`
  font-weight: 600;
  font-size: larger;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 20px;
  box-shadow: inset #abacaf 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  transition: all 0.2s ease;

  :hover {
    box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 2px;
  }
  :focus {
    background: #fff;
    outline: 0;
    box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 3px;
  }
`;
export const Button = styled.button`
  display: inline-block;
  outline: 0;
  appearance: none;
  padding: 0px 12px;
  border: 0px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  background-color: rgb(9, 128, 76);
  box-shadow: rgb(19 170 82 / 40%) 0px 2px 3px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  height: 36px;
  transition: all 150ms ease-in-out 0s;

  :hover {
    color: rgb(255, 255, 255);
    background-color: rgb(17, 97, 73);
    box-shadow: rgb(19 170 82 / 40%) 0px 2px 3px,
      rgb(195 231 202) 0px 0px 0px 3px;
  }

  :active {
    background-color: #12752e;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;
