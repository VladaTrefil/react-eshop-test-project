import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: content-box;
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 60px 60px;
`;

export const PageTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  font-weight: bold;
  font-size: 3rem;
`;

export const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
  font-size: 1rem;
  text-transform: uppercase;
  transition: background 300ms, color 300ms;

  &:hover {
    background: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.light};
  }
`;
