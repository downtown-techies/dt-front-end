import styled from '../../theme';
import theme from '../../theme/primaryTheme';

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4rem 0 2rem;
`;

const StyledPartners = styled.div`
  background-color: ${theme.colors.richBlack};
  text-align: center;
  color: ${theme.colors.reverse};
  padding: 2rem 10vw;
  margin: 0;
  z-index: 1;
  position: relative;
  @media (max-width: 1024px) {
    padding: 2rem 20vw;
    text-align: center;
  }

`;

export {
  StyledPartners,
  Links
};

