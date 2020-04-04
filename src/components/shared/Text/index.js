import * as React from 'react';
import styled, { css } from '../../../theme';
import theme from '../../../theme/primaryTheme';

const textStyles = {
  eyebrow: css`
    font-weight: 700;
    text-transform: uppercase;
    font-size: ${props => parseFloat(props.sizeFactor) * 0.8}rem;

    @media (min-width: 700px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1}rem;
    }
  `,
  tagLine: css`
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 700;
    font-size: ${props => parseFloat(props.sizeFactor) * 2.8}rem;
    text-align: center;

    @media (max-width: 1320px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1.8}rem;
    }
    @media (max-width: 700px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1.4}rem;
    }
  `,
  headline: css`
    font-size: ${props => parseFloat(props.sizeFactor) * 2.4}rem;
    line-height: 1.2;
  `,
  modalHeadline: css`
    font-size: ${props => parseFloat(props.sizeFactor) * 2.2}rem;
    font-weight: 700;
    padding-bottom: 0.2rem;
    background-color: ${theme.colors.richBlack};
    border-radius: 0.25rem 0.25rem 0 0;
  `,
  callToAction: css`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: ${props => parseFloat(props.sizeFactor) * 4.5}rem;
    line-height: 1.2;
    max-width: 75vw;
    margin: 0 auto 2rem;
    @media (max-width: 1120px) {
      font-size: 4rem;
      line-height: 1;
    }
  `,
  // TODO:  get rid of this 
  bigTitle: css`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 4.5rem;

    line-height: 1.2;
    max-width: 75vw;
    margin: 0 auto 2rem;
    @media (max-width: 1120px) {
      font-size: 3rem;
      line-height: 1;
    }
    @media (max-width: 600px) {
      font-size: 2rem;
      line-height: 1;
    }
  `,
  title: css`
    font-size: ${props => parseFloat(props.sizeFactor) * 1.6}rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  `,
  cardTitle: css`
    font-size: ${props => parseFloat(props.sizeFactor) * 2}rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 1.5rem 0;
  `,
  info: css`
    font-weight: 300;
    font-size: ${props => parseFloat(props.sizeFactor) * 0.6}rem;
  `,
  default: css`
    font-size: ${props => parseFloat(props.sizeFactor) * 1}rem;
  `,
};

const StyledText = styled.p`
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  ${({ textStyle = 'default' }) => textStyles[textStyle]};
  color: ${({ color }) => (color ? color : theme.colors.backgroundDark)};
`;

const Text = ({
  textStyle,
  tag,
  sizeFactor,
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
      sizeFactor={sizeFactor}
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

