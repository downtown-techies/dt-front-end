import styled from '../../theme';
import moonLanding from '../../assets/images/moonLanding.jpg';
import edisonBackground from '../../assets/images/edisonBackground.jpg';

const LandingWrapper = styled.div`
  min-height:        95vh;
  display:           block;
`;

const AboveTheFold = styled.div`
  display:           block;
  position:          relative;
  padding:           35vh 0rem 30vh;
  overflow:          hidden;
  width              100vw;
  min-height:        65vh;
  background:        center,
                     url(${moonLanding}) no-repeat;
  background-size:   100vw;
  @media (max-width: 900px) {
    background:      center,
                     url(${edisonBackground}) no-repeat;
    background-size: 100%;
  }
`;

export {
  LandingWrapper,
  AboveTheFold
};
