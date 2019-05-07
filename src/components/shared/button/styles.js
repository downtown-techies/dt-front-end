import styled from '../../../theme';
import { css } from '../../../theme';
import theme from '../../../theme/primaryTheme';

const ButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  text-align: center;
`;

const HeaderButtonContainer = styled.div`
  margin-top: -0.75rem;
  width: 100%;
  text-align: center;
`;

const ButtonWrapper = styled.form`
  margin-right: 2rem;
  width: fit-content;
  display: inline;

  &:last-child {
    margin-right: 0;
  }
`;

export {
  HeaderButtonContainer,
  ButtonContainer,
  ButtonWrapper
};

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
  white-space: nowrap;

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
  submit: css`
    padding: 0.5rem 3rem;
  `,
  unstyled: css`
    padding: 0;
    margin: 0;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    &:disabled {
      background-color: transparent;
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
  default: css`
  `,
};

export const StyledButton = styled.button`
  ${baseStyles}
  ${({ buttonStyle = 'default' }) => buttonStyles[buttonStyle]}
`;

