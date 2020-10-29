import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 0 -15px;
`;

export const Link = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 15px;
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
