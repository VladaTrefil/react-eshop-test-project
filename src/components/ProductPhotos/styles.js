import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const ImageHolder = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.subtleLight};
  height: 100%;
`;

export const Image = styled.img`
  max-width: 80%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
`;
