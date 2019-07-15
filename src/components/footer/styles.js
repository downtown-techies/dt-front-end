import styled from '../../theme';
import theme from '../../theme/primaryTheme';

const Links = styled.div`
`;

const StyledFooter = styled.div`
  margin-top: 2rem;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.tertiary};
  padding: 1rem 10vw;
  z-index: 1;
  position: relative;
`;

export {
  StyledFooter,
  Links
};

