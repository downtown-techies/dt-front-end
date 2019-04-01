import * as React from 'react';
import getPath from './icons';
import styled from '../../theme';

const IconWrap = styled.span`
  display: inline-block;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

const SvgIcon = ({
  name = 'default',
  style = {},
  fill = '#000',
  width = '100%',
  height = '100%',
  viewBox = '0 0 32 32',
  transform = 'translate(0, 0)'
}) => {
  const f = 'foo';
  console.log(f);

  return (
    <IconWrap style={{ width, height }}>
      <svg
        name={name}
        style={style}
        height={width}
        width={width}
        viewBox={viewBox}
        transform={transform}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {getPath(name)}
      </svg>
    </IconWrap>
  );
};

export default SvgIcon;
