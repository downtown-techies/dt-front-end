import styled from '../../theme';
import moonLanding from '../../assets/images/moonLanding.jpg';
import edisonBackground from '../../assets/images/edisonBackground.jpg';
import Text from '../shared/Text';

const LandingWrapper = styled.div`
  min-height:        95vh;
  display:           block;
`;

const SignupContainer = styled.div`
  display:           block;
  position:          absolute;
  bottom:            33vh;
`;

const AboveTheFold = styled.div`
  display:           block;
  position:          relative;
  padding:           35vh 0rem 45vh;
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

const CallToAction = styled(Text)`
  padding:           3rem 0 0rem;
`;

const BottomOfPage = styled.div`
  min-height:        20vh;
  padding:           5rem 0;
  margin:            0 auto;
  text-align:        center;
  width:             100vw;
  display:           block;
`;

export {
  AboveTheFold,
  BottomOfPage,
  CallToAction,
  LandingWrapper,
  SignupContainer
};
