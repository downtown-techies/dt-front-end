import styled from '../../theme';
import primaryTheme from '../../theme/primaryTheme';
import wrightBackground from '../../assets/images/wrightBackground.jpg';
import edisonBackground from '../../assets/images/edisonBackground.jpg';

const LandingWrapper = styled.div`
  min-height: 95vh;
  background-color: ${primaryTheme.colors.backgroundLight};
`;

const AboveTheFold = styled.div`
  display:           inline-block;
  position:          relative;
  padding:           45vh 0rem 30vh;
  overflow:          hidden;
  width              100vw;
  min-height:        65vh;
  background:        center,
                     url(${wrightBackground}) no-repeat ${primaryTheme.colors.primary};
  background-size:   100vw;
  @media (max-width: 900px) {
    background:      center,
                     url(${edisonBackground}) no-repeat ${primaryTheme.colors.primary};
    background-size: 100%;
  }
`;

const Tagline = styled.div`
  position: relative;
  height: 0;
  margin: 0 auto;
  z-index: 1;
  max-width: 100%;
`;

export {
  LandingWrapper,
  AboveTheFold
};
