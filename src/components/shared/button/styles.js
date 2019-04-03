import styled from '../../../theme';
import { css } from '../../../theme';
import theme from '../../../theme/primaryTheme';

const baseStyles = css`
  display: inline-block;
  font-family: 'Akkurat', sans-serif;
  appearance: none;
  background-color: ${theme.colors.accent};
  border: none;
  border-radius: 0.25rem;
  box-shadow: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1.4rem;
  transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    background-color: ${theme.colors.accentHover};
  }

  &:disabled {
    background-color: ${theme.colors.disabled};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const buttonStyles = {
  default: css`
  `,
};

export const StyledButton = styled.button`
  ${baseStyles}
  ${({ buttonStyle = 'default' }) => buttonStyles[buttonStyle]}
`;

