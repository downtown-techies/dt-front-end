import styled from '../../theme';

const HeaderContainer = styled.div`
  background-color: rgba( 45, 45, 45, 1 );
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
`;

const MenuRight = styled.div`
  margin-left: auto;
`;

export { 
  HeaderContainer, 
  StyledHeader,
  MenuRight
};
