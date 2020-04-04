import styled from '../../../theme';
import primaryTheme from '../../../theme/primaryTheme';

const HeaderContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100vw;
  padding: 1rem 3vw 1rem 10vw;
  background-color: ${primaryTheme.colors.transparent};
  z-index: 9999;

  @media (max-width: 1024px) {
    padding: 1rem 10vw;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 33px;
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
