import styled, { css }from '../../../../theme';
import theme from '../../../../theme/primaryTheme';

export const textStyles = {
};

export const TextContainer = styled.div`
  ${({ name = 'default' }) => textStyles[name]}
`;

const baseStyles = css`
  display:           block;
  position:          relative;
  overflow:          hidden;
  max-width:         100%;
  padding:           11rem 0rem 13rem;
  @media (max-width: 1380px) {
    padding:         8rem 0rem 10rem;
  }
  @media (max-width: 1060px) {
    padding:         7.5rem 0rem 8rem;
  }
  @media (max-width: 900px) {
    padding:         6rem 0rem 6rem;
  }
  @media (max-width: 750px) {
    padding:         5rem 0rem 5rem;
  }
  @media (max-width: 650px) {
    padding:         4rem 0rem 3rem;
  }
  @media (max-width: 500px) {
    padding:         3rem 0rem 3rem;
  }
`;

const mobileOverload = css`
  @media (max-width:     630px) {
    background-image:      none;
    background-color:      ${theme.colors.backgroundDark};
    text-align:            center;
    margin:                0 auto;
  }
`;

export const cardStyles = {
  default: css`
  `,
};

export const StyledCard = styled.div`
  ${baseStyles}
  ${({ name = 'default' }) => cardStyles[name]}
  background:        url(${({ image }) => (image ? image : null)});
  background-repeat: no-repeat;
  background-size:   contain;
  ${mobileOverload}
`;

