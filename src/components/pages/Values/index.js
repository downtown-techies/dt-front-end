import React, { useState, useEffect, useRef } from 'react';
// import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
import solarEclipse from '../../../assets/images/solarEclipse.jpg';
import { valuesList } from './values.js';

import { 
  ValuesContainer,
  SolarContainer,
  Solar,
} from './styles.js';

import './styles.css';

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

const Values = (props) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    if (count === 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    console.log(count);
  }, 2000);

  return (
    <ValuesContainer>
      <SolarContainer>
        <Solar 
          className="values-content"
          header={{
              'className':'values-content__header',
              'color': theme.colors.white, 
              'content': valuesList[count]}}
          image={solarEclipse}
          name="values"
          cardStyle="fullCard" />
      </SolarContainer>
    </ValuesContainer>
  );
}

export default Values;
