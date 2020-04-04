import React, { useState } from 'react';
import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
// import {  } from './styles.js';

const Ethos = (props) => {
  const [visible, toggleVisible] = useState(false);
  
  const handleClick = () => {
    toggleVisible(!visible);

    return
  }

  return (
    <>
     <Text color={theme.colors.backgroundDark}>We believe</Text>

     <Text color={theme.colors.backgroundDark}>Aesthetics matter</Text>
     <Text color={theme.colors.backgroundDark}>Intuitive user-experiences lead to beautiful user-interfaces</Text>

     <Text color={theme.colors.backgroundDark}>Technology is a tool to make our lives easier</Text>
     <Text color={theme.colors.backgroundDark}>Well-crafted tools bring joy</Text>

     <Text color={theme.colors.backgroundDark}>Complex problems must be made simple</Text>
     <Text color={theme.colors.backgroundDark}>A solution that is difficult to understand, is not yet solved</Text>

     <Text color={theme.colors.backgroundDark}>Information is freedom</Text>
     <Text color={theme.colors.backgroundDark}>Technology empowers the commmunity</Text>
    </>
  );
}

export default Ethos;
