import styled from "styled-components";

export const LogoHolder = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.highlight};
`;

export const LogoName = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.dark};
`;
