import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 540px;

  @media only Screen and (max-width: 620px) {
    width: 87vw;
  }
`;
