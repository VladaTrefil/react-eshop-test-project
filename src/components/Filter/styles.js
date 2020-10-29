import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const List = styled.div`
  display: flex;
  margin: 0 -20px;
`;

export const Label = styled.div`
  margin: 0 20px;
  font-weight: 500;
`;

export const Item = styled(Link)`
  margin: 0 20px;
`;
