import * as React from 'react';
import styled, { css } from '../../../theme';

const textStyles = {
  eyebrow: css`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: blue;
  `,
  headline: css`
    font-family: 'Publico', serif;
    font-size: 4.8rem;
    line-height: 1.2;
  `,
  subHeadline: css`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.2;
    padding-top: 0.5rem;
  }
  `,
  modalTitle: css`
    font-size: 2.5rem;
    font-weight: 700;
  `,
  formTitle: css`
    font-size: 2.4rem;
    font-weight: 700;
  `,
  subTitle: css`
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1rem;
  `,
  link: css`
    text-decoration: none;
    border-bottom: 1px solid purple;
    padding: 0 0 0.5rem 0;

    &:hover {
      color: blue;
      border-bottom: 1px solid currentColor;
    }
  `,
  medium: css`
    font-size: 2rem;
  `,
  label: css`
    font-size: 1.6rem;
    color: orange;
  `,
  tiny: css`
    font-size: 1rem;
  `,
  small: css`
    font-size: 1.6rem;
    line-height: 1.6;
  `,
  default: css`
    font-size: 1.6rem;
  `,
};

const StyledText = styled.p`
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  ${({ textStyle = 'default' }) => textStyles[textStyle]}
`;

const Text = ({
  textStyle,
  tag,
  hidden,
  children,
  color,
  bold,
  className,
  ...rest
}) => (
  <StyledText
    color={color}
    textStyle={textStyle}
    as={tag}
    hidden={hidden}
    bold={bold}
    className={className}
    {...rest}
  >
    {children}
  </StyledText>
);

export default Text;

