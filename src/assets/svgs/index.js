import * as React from 'react';
import getPath from './icons';
import styled from '../../theme';

const IconWrap = styled.span`
  display: inline-block;
  width: ${(props) => props.wrapperWidth || 'auto'};
  height: ${(props) => props.wrapperHeight || 'auto'};
  margin : ${(props) => props.wrapperMargin || 0};
  padding : ${(props) => props.wrapperPadding || 0};
  position : ${(props) => props.position || 'static'};
  top : ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
  right : ${(props) => props.right || 0};
  bottom : ${(props) => props.bottom || 0};
`;

const SvgIcon = ({
  name = 'default',
  style = {},
  fill = '#000',
  altFill = '#fff',
  width = 24,
  height = 24,
  wrapperWidth,
  wrapperHeight,
  same = false,
  sameSize,
  viewBox = '0 0 24px 24px',
  transform = 'translate(0, 0)',
  wrapperMargin,
  wrapperPadding,
  position,
  top,
  bottom,
  right,
  left
}) => {
  wrapperHeight = wrapperHeight ? wrapperHeight : height;
  wrapperWidth = wrapperWidth ? wrapperWidth : width;
  width = same ? sameSize : width;
  height = same ? sameSize : height;
  viewBox = same ? `0 0 ${sameSize} ${sameSize}` : viewBox;

  return (
    <IconWrap style={{ wrapperHeight , wrapperWidth }} 
      wrapperMargin={wrapperMargin}
      wrapperPadding ={wrapperPadding}
      position={position}
      top={top}
      bottom={bottom}
      right={right}
      left={left}>
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
        {getPath({ 
          name: name, 
          fill: fill, 
          altFill: altFill 
        })}
      </svg>
    </IconWrap>
  );
};

export default SvgIcon;
