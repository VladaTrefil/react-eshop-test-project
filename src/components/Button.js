import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  border: 2px solid black;
  background: black;
  color: white;
  padding: 20px;
  font-size: 1rem;
  text-transform: uppercase;
  transition: background 300ms, color 300ms;

  &:hover {
    background: white;
    color: black;
  }
`;

export default ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
