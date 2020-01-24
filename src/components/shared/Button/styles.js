import styled from '../../../theme';
import { css } from '../../../theme';
import theme from '../../../theme/primaryTheme';

const ButtonSection = styled.section`
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  @media (max-width: 1120px) {
    margin-top: 4rem;
  }
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
  ButtonSection,
  ButtonWrapper
};

const baseStyles = css`
  display: inline-block;
  font-family: 'Akkurat', sans-serif;
  appearance: none;
  border: none;
  border-radius: 0.25rem;
  box-shadow: none;
  cursor: pointer;
  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 0.7rem;
  }

  font-weight: 700;
  padding: 0.5rem 1.4rem;
  transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  white-space: nowrap;

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
  big: css`
    padding: 0.5rem 4rem;
  `,
  unstyled: css`
    padding: 0;
    margin: 0;
    background-color: transparent !important;

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
  color: ${({ color }) => (color ? color: theme.colors.primary)};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : theme.colors.accent)};
  &:hover{
    background-color: ${({ backgroundColorHover }) => (backgroundColorHover ? backgroundColorHover : theme.colors.accentHover)};
  }
`;

