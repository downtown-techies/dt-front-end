import React from 'react';
// import React, { useState } from 'react';
import Text from '../../shared/Text';
// import theme from '../../../theme/primaryTheme';
// import {  } from './styles.js';

const Values = (props) => {
  // const [visible, toggleVisible] = useState(false);
  // 
  // const handleClick = () => {
  //   toggleVisible(!visible);

  //   return
  // }

  return (
    <>
     <Text>We are:</Text>

        <Text>Efficient</Text>
        <Text>Design-oriented</Text>
        <Text>Community-focused</Text>
        <Text>Adaptive</Text>
        <Text>Creative</Text>

     <Text> What we do: </Text>
        <Text>Build visions</Text>
        <Text>Empower community</Text>
        <Text>Improve lives</Text>
        <Text>Maximize efficiency & revenue</Text>
        <Text>Design intuitive interfaces</Text>

      <Text>How we do it: </Text>
        <Text>Bridge implementation, value and ROI</Text>
        <Text>Break down big dreams into achievable tasks</Text>
        <Text>Create aesthetically pleasing user experiences</Text>

    </>
  );
}

export default Values;
