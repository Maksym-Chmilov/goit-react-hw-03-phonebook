import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ContactsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: small;
  height: 25px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  max-width: 50px;
  padding: 0 16px 0 16px;
  color: inherit;
  background-color: orange;
  border: 1px solid black;
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :hover {
    border-color: orange;
    color: orange;
    background-color: black;
  }
`;
export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  font-size: large;
  justify-content: space-between;
`;