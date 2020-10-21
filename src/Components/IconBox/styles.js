import styled, { css } from 'styled-components';

const BoxItem = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  position: absolute;
  transition: all .3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxWrapper = styled.article`
  position: relative;
  width: 100%;
  height: 8rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background: transparent;
  
  @media (min-width: 740px) {
    height: 9rem;
  }

  @media (min-width: 980px) {
    height: 12rem;
  }
`;

export const BoxFront = styled(BoxItem)`
  font-size: 2rem;
  font-weight: 600;
  background: #1f2029;
  
  ${({display}) => display ? css`
    transform: perspective(30rem) rotateY(-180deg);    
  ` : css`
    transform: perspective(30rem) rotateY(0deg);
  `};
  
  &.active {
    transform: perspective(30rem) rotateY(-180deg);    
  }
 
  span {
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const BoxBack = styled(BoxItem)`
  background: #fff;
  padding: 0.2rem;

  ${({display}) => display ? css`
    transform: perspective(30rem) rotateY(0deg);
    pointer-events: none;
  ` : css`
    transform: perspective(30rem) rotateY(180deg);
    pointer-events: auto;
  `};

  &.active {
    transform: perspective(30rem) rotateY(0deg);     
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
