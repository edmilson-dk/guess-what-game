import React, { useState, useEffect } from 'react';

import createNewElements from '../../Hooks/useIcons';

function displayElementsClicked(selectorItem) {
  const item = document.querySelector(`${selectorItem}`);
  item.classList.add('active');
}

function validateEqualElements(element) {
  let equal = '';
  let counterEqual = 0;

  for (let index = 1; index < element.length; index++) {
    equal = element[index-1].classNameItem;

    if (equal === element[index].classNameItem) {
      counterEqual++;
    } 
  }

  return counterEqual;
} 

function useGame() {
  const [ hitCounter, setHitCounter ] = useState(0);
  const [ indexOfElements, setIndexOfElements ] = useState([]);
  const [ indexOfElementsClicked, setIndexOfElementsClicked ] = useState([]);
  const [ elementsClicked, setElementsClicked ] = useState([]);
  const [ display, setDisplay ] = useState(true);

  function generateElements() {
    const items = createNewElements();
  
    return items;
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

        setIndexOfElements([ ...indexOfElements, index ]);
        setIndexOfElementsClicked([ ...indexOfElementsClicked, index ]);
      }
    } else {
      alert('Item já foi clicado, tente outro!');
    }
    
    displayElementsClicked(`.item-${index}.back`);
  }

  function validateElementsClicked(elements) {
        
    if (validateEqualElements(elements) >= 2) {
      setHitCounter(hitCounter + 1);

      let items = document.querySelectorAll(`.${elements[0].classNameItem}`); 

      items.forEach(item => {
        item.classList.add('active');
      });
    } else {
      setIndexOfElementsClicked(indexOfElementsClicked => 
        indexOfElementsClicked.splice(-3, 3)
      );

      elements.forEach(item => {
        let itemClicked = document.querySelector(`.${item.uniqueClassName}.back`);
        itemClicked.classList.remove('active');
      });
    }

    setElementsClicked([]);
    setIndexOfElements([]);
  }
  
  useEffect(() => {
    setTimeout(() => {
      setDisplay(display => !display);
    }, 1500);
  }, []);

  useEffect(() => {
    if (elementsClicked.length === 3) {
      setTimeout(() => {
        validateElementsClicked(elementsClicked);
      }, 500);
    }
  }, [elementsClicked]);

  useEffect(() => {
    if (hitCounter === 4) {
      alert('Opa!! acertou todas,jogue outra partida :)');
    }
  }, [hitCounter]);

  return { 
    getPropertyOfElementCliked,
    display,
    generateElements
  };
}

export default useGame;
