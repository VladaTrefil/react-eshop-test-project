import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  padding: 14px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
`;

export const LogoHolder = styled.div`
  margin-left: 20px;
`;
