import React from 'react';

import {
  BoxWrapper,
  BoxFront,
  BoxBack,
} from './styles';

function IconBox({ display, icon, className, ...rest}) {
  return (
    <BoxWrapper>
      <BoxFront 
        {...rest}
        display={display}
        className={`${className} front`
      }>
        <span>?</span>
      </BoxFront>
      <BoxBack 
        {...rest}
        display={display}
        className={`${className} back`
      }>
        <img src={icon} alt="Icone"/>
      </BoxBack>
    </BoxWrapper>
  );
}

export default IconBox;
