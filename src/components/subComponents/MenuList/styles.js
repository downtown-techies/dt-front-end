import styled from '../../../theme';

const MenuContainer = styled.div`
  padding: 2.5em 1.5em 0;
  font-size: 0.9em;
  background: rgba(0, 0, 0, 0.9);
  height: calc(100vh - 72px);
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
