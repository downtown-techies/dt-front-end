import * as React from 'react';
import styled, { css } from '../../../theme';
import theme from '../../../theme/primaryTheme';


const textStyles = {
  eyebrow: css`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;

    @media (min-width: 700px) {
      font-size: 2.8rem;
    }
  `,
  tagLine: css`
    font-size: 1.6rem;
    text-align: center;

    @media (orientation: landscape) {
      font-size: 1.2rem;
    }

    @media (min-width: 1200px) {
      font-size: 2.6rem;
    }
  `,
  headline: css`
    font-size: 2.4rem;
    line-height: 1.2;
  `,
  modalHeadline: css`
    font-size: 2.2rem;
    font-weight: 700;
    padding-bottom: 0.2rem;
    background-color: ${theme.colors.backgroundDark};
    border-radius: 0.25rem 0.25rem 0 0;
  `,
  title: css`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  `,
  info: css`
    font-weight: 300;
    font-size: 0.6rem;
  `,
  small: css`
    font-weight: 700;
    font-size: 0.6rem;
  `,
  default: css`
    font-size: 1rem;
  `,
};

const StyledText = styled.p`
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  ${({ textStyle = 'default' }) => textStyles[textStyle]};
  color: ${({ color }) => (color ? color : theme.colors.primary)};
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

