import React, { useState, useEffect, useRef } from 'react';
// import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
import rockyVector from '../../../assets/images/rockyVector.jpg';
import { weDoList } from './weDo.js';

import { 
  WeDoContainer,
  RockyVectorContainer,
  RockyVector,
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

const WeDo = (props) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    if (count === 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 2000);

  const content = `We ${weDoList[count]}`;

  return (
    <WeDoContainer>
      <RockyVectorContainer>
        <RockyVector 
          className="we-do-content"
          header={{
              'className':'we-do-content__header',
              'color': theme.colors.white, 
              'sizeFactor': 1,
              'content': content}}
          image={rockyVector}
          name="we-do"
          cardStyle="fullCard" />
      </RockyVectorContainer>
    </WeDoContainer>
  );
}

export default WeDo;
