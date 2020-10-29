import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.subtleDark};
  border-bottom: 8px solid ${({ theme }) => theme.colors.subtleLight};
`;

export const Description = styled.div`
  padding: 15px 20px 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 5px;
`;
