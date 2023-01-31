import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: medium;
  padding: 20px;
`;
export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 0 auto 1.5rem auto;
  align-items: center;
  font-size: medium;
  text-align: left;
  padding: 0.5rem 15rem 0.5rem 1rem;
  color: inherit;
  background-color: orange;
  border: 1px solid black;
  border-radius: 5px;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :hover,
  :focus {
    cursor: pointer;
    border-color: orange;
    color: black;
    background-color: rgba(240, 213, 183, 0.5);
  }
  :-webkit-autofill {
    transition: background-color 250s linear;
  }
`;
export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 5px;
  color: black;
  background-color: orange;
  border: 1px solid black;
  font-size: medium;
  height: 36px;
  width: 200px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  padding: 0 16px 0 16px;
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :hover {
    border-color: orange;
    color: orange;
    background-color: black;
  }
`;