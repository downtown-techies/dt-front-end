import styled from '../../theme';
import primaryTheme from '../../theme/primaryTheme';
import wrightBackground from '../../assets/images/wrightBackground.jpg';
import edisonBackground from '../../assets/images/edisonBackground.jpg';

const EyeBrow = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  height: 0;
  top: 1rem;
  z-index: 1;
`;

const LandingWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 100vw;
  min-height: 85vh;
  background: center,
              url(${wrightBackground}) no-repeat ${primaryTheme.colors.primary};
  background-size: 100vw; 
  @media (max-width: 900px) {
    background: center,
                url(${edisonBackground}) no-repeat ${primaryTheme.colors.primary};
    background-size: 100%; 
  }
`;

const SVGWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem 0 0;
`;

const UserFormWrapper = styled.div`
  padding: 0 2rem;
  display: inline-block;
  width 100vw;
`;

const TaglineWrapper = styled.div`
  padding: 22vh 0rem 4rem;
  display: inline-block;
  width 100vw;
`;

const Tagline = styled.div`
  position: relative;
  height: 0;
  margin: 0 auto;
  z-index: 1;
  max-width: 50%;
  @media (max-width: 700px) {
    max-width: 100%;
  }

`;

export {
  LandingWrapper,
  TaglineWrapper,
  SVGWrapper,
  UserFormWrapper,
  Tagline,
  EyeBrow
};
