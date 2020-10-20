import React, { useEffect, useState } from 'react';

import IconBox from '../IconBox/';
import Icons from '../../Hooks/useIcons';

import { 
  GameWrapper,
  GameContainer,
  Button
} from './styles';

function Game() {
  let icons = [];

  const [ hitCounter, setHitCounter ] = useState(0);
  const [ indexOfElements, setIndexOfElements ] = useState([]);
  const [ indexOfElementsClicked, setIndexOfElementsClicked ] = useState([]);
  const [ elementsClicked, setElementsClicked ] = useState([]);
  const [ display, setDisplay ] = useState(true);

  function displayItems() {
    const elements = icons.map((item, index) => {
      let classNameItem = item.split('/').slice(-1);
      classNameItem = classNameItem[0].split('.');
      
      return (
        <IconBox 
          key={item}
          display={display}
          icon={item}
          className={`elements ${classNameItem[0]} item-${index}`}
          onClick={() => getPropertyOfElementCliked(classNameItem[0], index)}
        />
      )
    });
    
    return elements;
  }

  function displayElementsClicked(index) {
    const item = document.querySelector(`.item-${index}.back`);
    item.classList.add('active');
  }

  function validateElementsClicked(elements) {
    let equal = '';
    let counterEqual = 0;
    
    for (let index = 1; index < elements.length; index++) {
      equal = elements[index-1].classNameItem;

      if (equal === elements[index].classNameItem) {
        counterEqual++;
      } 
    }
    
    if (counterEqual  >= 2) {
      setHitCounter(hitCounter + 1);

      let items = document.querySelectorAll(`.${elements[0].classNameItem}`); 

      items.forEach(item => {
        item.classList.add('active');
      });
    } else {
      setIndexOfElementsClicked(indexOfElementsClicked => indexOfElementsClicked.splice(-4, 4));
      
      elements.forEach(item => {
        let itemClicked = document.querySelector(`.${item.uniqueClassName}.back`);
        itemClicked.classList.remove('active');
      });
    }

    setElementsClicked([]);
    setIndexOfElements([]);
  }

  function getPropertyOfElementCliked(classNameItem, index) {
    if (!indexOfElementsClicked.includes(index)) {
      if (elementsClicked.length === 0 || !indexOfElements.includes(index)) {
        setElementsClicked([
          ...elementsClicked,
          {
            classNameItem,
            uniqueClassName: `item-${index}`,
            index,
          }
        ]);

        setIndexOfElements([
          ...indexOfElements,
          index
        ]);

        setIndexOfElementsClicked([
          ...indexOfElementsClicked,
          index
        ]);
      }
    } else {
      alert('Item ja foi clicado, tente outro!');
    }
    
    displayElementsClicked(index);
  }

  function init() {
    icons = Icons();
  }

  window.addEventListener('load', init(), false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(display => !display);
    }, 1200);
  }, [icons]);

 
  useEffect(() => {
    if (elementsClicked.length === 3) {
      setTimeout(() => {
        validateElementsClicked(elementsClicked);
      }, 1200);
    }
  }, [elementsClicked]);

  useEffect(() => {
    if (hitCounter === 4) {
     /*let  items = document.querySelectorAll('.elements');

      items.forEach(item => {
        item.classList.remove('active');
      });
    */
      alert('Opa!! acertou todas,jogue outra partida :)');
    }
  }, [hitCounter]);
   
  return (
    <GameContainer>
      <GameWrapper>
        { displayItems() }
      </GameWrapper>
    
      <Button onClick={() => window.location.reload()}>
        Novo jogo!
      </Button>
    </GameContainer>
  );
}

export default Game;
