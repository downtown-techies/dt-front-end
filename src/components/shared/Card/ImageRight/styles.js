import styled, { css }from '../../../../theme';
import defaultImage from '../../../../assets/images/default.png';

export const textStyles = {
  firstFlight: css`
    position: relative;
    left: 5rem;
    text-align: left;
  `,
  default: css`
  `,
};

export const TextContainer = styled.div`
  ${({ name = 'default' }) => textStyles[name]}
`;

const baseStyles = css`
  display:           block;
  position:          relative;
  padding:           10rem 0rem 10rem;
  overflow:          hidden;
  max-width:         100%;
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
`;
