import React from 'react';

import Game from '../../Components/Game/';

import {
  HomePage,
  Container
} from  './styles';

function Home() {
  return (
    <HomePage>
      <Container>
        <Game />
      </Container>
    </HomePage>    
  );
}

export default Home;
