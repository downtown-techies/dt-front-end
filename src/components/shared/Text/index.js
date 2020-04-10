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
  title: css`
    font-size: ${props => parseFloat(props.sizeFactor) * 1.6}rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  `,
  cardHeadline: css`
    white-space: pre-line;
    font-weight: 300;
    font-size: ${props => parseFloat(props.sizeFactor) * 3.2}rem;
    @media (max-width: 1380px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 2.5}rem;
    }
    @media (max-width: 1060px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 2}rem;
    }
    @media (max-width: 700px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1.6}rem;
    }
    @media (max-width: 630px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1.3}rem;
      padding-bottom: 0.7rem;
    }
  `,
  cardCopy: css`
    white-space: pre-line;
    font-weight: 100;
    font-size: ${props => parseFloat(props.sizeFactor) * 1.4}rem;
    @media (max-width: 1380px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1}rem;
    }
    @media (max-width: 1060px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 0.9}rem;
    }
    @media (max-width: 700px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 0.8}rem;
      padding-bottom: 1rem;
    }
  `,
  cardTitle: css`
    margin: 1.5rem 0;
    white-space: pre-line;
    font-weight: 100;
    font-size: ${props => parseFloat(props.sizeFactor) * 2}rem;
    @media (max-width: 1380px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1.8}rem;
    }
    @media (max-width: 1060px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1.4}rem;
    }
    @media (max-width: 700px) {
      font-size: ${props => parseFloat(props.sizeFactor) * 1.2}rem;
    }
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
  ${({ bold=undefined }) => {
      if(bold){
        return(
        'font-weight: 700'
        )
      }
    }};
  ${({ textStyle = 'default' }) => textStyles[textStyle]};
  color: ${({ color }) => (color ? color : theme.colors.backgroundDark)};
`;

const Text = ({
  textStyle,
  tag,
  sizeFactor=1,
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

