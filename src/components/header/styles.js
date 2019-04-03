import styled from '../../theme';
import theme from '../../theme/primaryTheme';

const HeaderContainer = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1rem 10vw;
  z-index: 1;
  position: relative;
  color: white;
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  top: 3px;
  position: relative;
`;

const MenuRight = styled.div`
  margin-left: auto;
`;

export { 
  HeaderContainer, 
  StyledHeader,
  MenuRight
};
