import React, { useState, useEffect, useRef } from 'react';
// import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
import flashingLight from '../../../assets/images/flashingLight.gif';
import { beliefsList } from './beliefs.js';

import { 
  BeliefsContainer,
  FlashingLightContainer,
  FlashingLight,
} from './styles.js';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Beliefs = (props) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 3000);

  const content = `${beliefsList[count]}`;

  return (
    <BeliefsContainer>
      <FlashingLightContainer>
        <FlashingLight 
          className="beliefs-content"
          image={flashingLight}
          header={{
              'className':'beliefs-bottom-content__header',
              'color': theme.colors.white, 
              'sizeFactor': 0.7,
              'content': content}}
          name="beliefs"
          cardStyle="fullCard" />
      </FlashingLightContainer>
    </BeliefsContainer>
  );
}

export default Beliefs;
