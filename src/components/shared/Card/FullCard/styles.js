import styled, { css }from '../../../../theme';

export const textStyles = {
};

export const TextContainer = styled.div`
  ${({ name = 'default' }) => textStyles[name]}
`;

const baseStyles = css`
  display:           block;
  position:          relative;
  padding:           7rem 0rem 13rem;
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
  background:        url(${({ image }) => (image ? image : null)});
  background-repeat: no-repeat;
  background-size:   contain;
`;

