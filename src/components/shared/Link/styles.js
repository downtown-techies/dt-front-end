import styled, {css} from '../../../theme';
import theme from '../../../theme/primaryTheme';
import primaryTheme from '../../../theme/primaryTheme';

const linkStyles = {
  inlineFooter: css`
    margin-right: 0.5rem;
  `,
  partners: css`
    width: 33%;
    padding: 3rem 4rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
      width: 30vw;
      margin: 10vh 15vw;
      text-align: center;
      padding: 0;
    }
  `,
  headerLogo: css`
    margin-top: -0.4rem;  
    cursor: pointer;
  `,
  button: css`
    background-color: ${primaryTheme.colors.accent}
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
  `,

  default: css`
  `,
};

export const StyledLink = styled.a`
  ${({ linkStyle = 'default' }) => linkStyles[linkStyle]};
  color: ${({ color }) => (color ? color : theme.colors.primary)};
`;
