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

const ErrorResponseHandler = ({
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
  console.log(errors);
  if (errors) {
    return (
      <StyledError
        errorStyle={errorStyle}
        color={color}
        bold={bold}
        className={className}
        {...rest}
      >
        <Text color={color}>{value}</Text>
      </StyledError>
    );
  } else {
    return null;
  }
}

export default ErrorResponseHandler;
