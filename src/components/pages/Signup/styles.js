import styled from '../../../theme';
import theme from '../../../theme/primaryTheme';

const UserFormWrapper = styled.div`
  padding: 0 2rem;
  display: inline-block;
  width 100vw;
  background-color: ${({ visible }) => (visible ? theme.colors.backgroundDark : 'transparent')};
`;

const SignupWrapper = styled.div`
  padding: 0;
  width 100vw;
`;

const SVGWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem 0 0;
`;

export {
  SignupWrapper,
  UserFormWrapper,
  SVGWrapper,
};

