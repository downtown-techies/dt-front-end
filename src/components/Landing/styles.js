import styled from '../../theme';
import moonLanding from '../../assets/images/moonLanding.jpg';
import edisonBackground from '../../assets/images/edisonBackground.jpg';
import Text from '../shared/Text';
import { createGlobalStyle } from 'styled-components';

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
  max-width          100%;
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

const Others = createGlobalStyle`
/* Other styles */

  {/* aesthetics matter */}
  .beliefs-content {
    padding: 11rem 0rem 9rem;
    background-position: center;
    text-align: center;
    width: 100vw;
  }

  .beliefs-bottom-content {
    padding: 2.5rem 0 5rem;
    text-align: center;
    width: 100vw;
  }

  .beliefs-bottom-content__header {
    position: relative;
    line-height: 3.5rem;
  }

  {/* aesthetics matter */}
  .aesthetics-content {
    padding: 10rem 0rem 10rem;
    text-align: right;
    width: 100vw;
  }

  .aesthetics-content__header {
    position: relative;
    line-height: 3.5rem;
    right: 6rem;
  }

  .aesthetics-content__info {
    position: relative;
    line-height: 1.8rem;
    right: 3rem;
  }

  {/* freedom */}
  .information-content {
    padding: 10rem 0rem 10rem;
    text-align: right;
  }

  .information-content__header {
    position: relative;
    line-height: 3.5rem;
    right: 8rem;
  }

  .information-content__info {
    position: relative;
    line-height: 1.8rem;
    right: 6rem;
  }

  {/* well crafted tools */}
  .technology-content {
    padding: 10rem 0rem 10rem;
    text-align: left;
  }

  .technology-content__header {
    position: relative;
    line-height: 3.5rem;
    left: 4rem;
  }

  .technology-content__info {
    position: relative;
    padding-top: 1rem;
    line-height: 1.8rem;
    left: 8rem;
  }

  {/* simplify the complex */}
  .simplify-content {
    padding: 10rem 0rem 10rem;
    text-align: left;
  }

  .simplify-content__header {
    position: relative;
    line-height: 3.5rem;
    left: 0rem;
  }

  .simplify-content__info {
    position: relative;
    padding-top: 1rem;
    line-height: 1.8rem;
    left: 2rem;
  }

  {/* aesthetics matter */}
  .values-content {
    padding: 7rem 0rem 13rem;
    text-align: center;
    width: 100vw;
  }

  .values-content__header {
    position: relative;
    line-height: 3.5rem;
    right: 12rem;
  }

  {/* aesthetics matter */}
  .we-do-content {
    padding: 11rem 0rem 9rem;
    text-align: center;
    width: 100vw;
  }

  .we-do-content__header {
    position: relative;
    line-height: 3.5rem;
  }
  .bm-burger-button {
    display: none !important;
  }

  .bm-cross-button {
    display: none !important;
  }
`;

export {
  AboveTheFold,
  BottomOfPage,
  CallToAction,
  LandingWrapper,
  SignupContainer,
  Others
};
