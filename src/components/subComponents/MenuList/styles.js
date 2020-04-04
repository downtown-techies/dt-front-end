import styled from '../../../theme';
import primaryTheme from '../../../theme/primaryTheme';

const MenuContainer = styled.div`
  padding: 2.5em 1.5em 0;
  font-size: 0.9em;
  background: ${primaryTheme.colors.backgroundDark};
  height: 100vh;
 //  height: calc(100vh - 72px);
`;

const MenuLink = styled.a`
  color: white;
  display: inline-block;
  width: 100%;
  margin-top: 1rem;
`;

export { 
  MenuContainer,
  MenuLink
};
