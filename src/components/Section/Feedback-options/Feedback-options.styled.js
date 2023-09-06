import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 15px;
`;

export const OptionsButton = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  background-color: #9cf5ec52;
  font-weight: 500;
  text-transform: capitalize;
  box-shadow: 2px 2px;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: whitesmoke;
  }
`;
