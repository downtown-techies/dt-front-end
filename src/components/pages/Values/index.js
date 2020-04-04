import React, { useState } from 'react';
import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
// import {  } from './styles.js';

const Values = (props) => {
  const [visible, toggleVisible] = useState(false);
  
  const handleClick = () => {
    toggleVisible(!visible);

    return
  }

  return (
    <>
     <Text>We are:</Text>

        Efficient
        Design-oriented
        Community-focuse
        Adaptive
        Creative

      What we do: 
        Build visions
        Empower community
        Improve lives
        Maximize efficiency & revenue
        Design intuitive interfaces

      How we do it: 
        Bridge implementation, value and ROI
        Break down big dreams into achievable tasks
        Create aesthetically pleasing user experiences

    </>
  );
}

export default Values;
