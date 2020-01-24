import styled from '../../../theme';
import primaryTheme from '../../../theme/primaryTheme';

const HeaderContainer = styled.div`
  background-color: ${primaryTheme.colors.primary};
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  z-index: 1;
  position: relative;
  color: white;
  padding: 1rem 3vw 1rem 10vw;

  @media (max-width: 1024px) {
    padding: 1rem 10vw;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  top: 5px;
  position: relative;
`;

const MenuRight = styled.div`
  margin-left: auto;
  position: relative;
  bottom: 0.6rem;
`;

export { 
  HeaderContainer, 
  StyledHeader,
  MenuRight
};
