import styled from '../../theme';
import theme from '../../theme/primaryTheme';

const Links = styled.div`
`;

const ImageContainer = styled.div`
  padding: 6rem 0 4rem;
`;

const StyledSummerBash = styled.div`
  background-color: ${theme.colors.accent};
  text-align: center;
  color: ${theme.colors.reverse};
  padding: 1rem 0 5rem;
  z-index: 1;
  position: relative;
`;

const HeaderWrapper = styled.div`
  width: 40vw;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 1120px) {
    width: 75vw;
    padding-top: 5rem;
  }
`;

export {
  HeaderWrapper,
  ImageContainer,
  StyledSummerBash,
  Links
};

