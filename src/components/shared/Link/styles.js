import styled, {css} from '../../../theme';
import theme from '../../../theme/primaryTheme';

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
  default: css`
  `,
};

export const StyledLink = styled.a`
  ${({ linkStyle = 'default' }) => linkStyles[linkStyle]};
  color: ${({ color }) => (color ? color : theme.colors.primary)};
`;
