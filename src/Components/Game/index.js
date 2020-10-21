import React, { useEffect, useState } from 'react';

import IconBox from '../IconBox/';
import useGame from '../../Service/Game/';

import { 
  GameWrapper,
  GameContainer,
  Button
} from './styles';

function Game() {
  const { 
    generateElements,
    getPropertyOfElementCliked,
    display,
  } = useGame();

  const [ elements, setElements ] = useState([]);

  function displayItems() {
    const items = elements.map((item, index) => {
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
    
    return items;
  }
  
  useEffect(() => {
    setElements(generateElements());
  }, []);

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
