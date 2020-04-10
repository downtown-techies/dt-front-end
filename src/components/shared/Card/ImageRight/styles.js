import styled, { css }from '../../../../theme';
import defaultImage from '../../../../assets/images/default.png';

export const textStyles = {
  default: css`
  `,
};

export const TextContainer = styled.div`
  ${({ name = 'default' }) => textStyles[name]}
`;

const baseStyles = css`
  display:           block;
  position:          relative;
  overflow:          hidden;
  max-width:         100%;
  padding:           6rem 0rem 6rem;
  @media (max-width: 1380px) {
    padding:         5rem 0rem 5rem;
  }
  @media (max-width: 1060px) {
    padding:         3rem 0rem 3rem;
  }
  @media (max-width: 850px) {
    padding:         2rem 0rem 2rem;
  }
`;

const mobileOverload = css`
  @media (max-width:     630px) {
    background-image:      none;
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
  background:          url(${({ image }) => (image ? image : defaultImage)});
  background-position: right;
  background-repeat:   no-repeat;
  background-size:     contain;
  background-color:    white;
  ${mobileOverload}
`;
