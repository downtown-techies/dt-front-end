import * as React from 'react';
import styled, { css } from '../../../theme';
import theme from '../../../theme/primaryTheme';
import Text from '../Text';

const errorStyles = {
  default: css`
    font-size: 1rem;
  `,
};

const StyledError = styled.div`
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  ${({ errorStyle = 'default' }) => errorStyles[errorStyle]};
  color: ${({ color }) => (color ? color : theme.colors.primary)};
`;

const ErrorHandler = ({
  errorStyle,
  errors,
  color,
  children,
  value,
  label,
  bold,
  className,
  ...rest
}) => {
  if (errors 
    && errors[label] 
    && errors[label].length > 0
    && value
    && value.length > 0) {

    return (
      <StyledError
        errorStyle={errorStyle}
        errors={errors}
        value={value}
        color={color}
        bold={bold}
        className={className}
        key={label}
        {...rest}
      >
        <Text color={color}>{errors[label]}</Text>
      </StyledError>
    );
  } else {
    return null;
  }
}

export default ErrorHandler;
