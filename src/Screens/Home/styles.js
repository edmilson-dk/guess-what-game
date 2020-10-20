import styled from 'styled-components';

export const HomePage = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.article`
  width: 100%;
  height: 100%;
  max-width: 38rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 740px) {
    max-width: 72rem;
  }

  @media (min-width: 980px) {
    max-width: 94rem;
  }
  
`;

