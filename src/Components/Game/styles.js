import styled from 'styled-components';

export const GameContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 740px) {
    max-width: 58rem;
  }

  @media (min-width: 980px) {
    max-width: 64rem;
  }
  
`;

export const GameWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #14151b;
`;

export const Button = styled.button`
  width: 80%;
  margin-top: 2rem;
  padding: 1.2rem 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background: #00c853;
  border-radius: 0.5rem;
  border: none;

  @media (min-width: 740px) {
    font-size: 2.5rem;
    padding: 1.3rem 1rem;
  }

  @media (min-width: 980px) {
    font-size: 3rem;
    padding: 1.5rem 1rem;
  }
`;
