import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 60px 80px 40px;
`;

export const Brand = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.subtleDark};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.subtleDark};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Stock = styled.div`
  color: ${({ theme }) => theme.colors.subtleDark};
`;
