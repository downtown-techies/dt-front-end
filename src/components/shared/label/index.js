import * as React from 'react';
import Text from '../text';
import styled, { css } from '../../../theme';
import theme from '../../../theme/primaryTheme';

const StyledLabel = styled.label`
  ${({ labelStyle = 'default' }) => labelStyles[labelStyle]};
  color: ${({ color }) => (color ? color : theme.colors.primary)};
`;

const labelStyles = {
  radioLabel: css`
    font-size: 1rem;
    margin-left: 0.5rem;
    display: inline-block;
  `,
  default: css`
    min-width: 200px;
    font-size: 1rem;
    margin-top: 1rem;
    padding-left: 0.5rem;
    padding-bottom: 0.3rem;
  `,
};

class Label extends React.Component {
  render() {
    const { bold, children, color, labelStyle } = this.props;

    return (
      <StyledLabel
          labelStyle={labelStyle}
      >
        <Text
          bold={bold || false}
          color={color}
          tag='span'
          textStyle='label'
          {...this.props}
        >
          {children}
        </Text>
      </StyledLabel>
    );
  }
}

export default Label;

