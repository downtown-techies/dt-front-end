import React, { useState } from 'react';
import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
// import {  } from './styles.js';

const Work = (props) => {
  const [visible, toggleVisible] = useState(false);
  
  const handleClick = () => {
    toggleVisible(!visible);

    return
  }

  return (
    <>
      Work
    </>
  );
}

export default Work;
