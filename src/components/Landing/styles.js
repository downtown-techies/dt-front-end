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
  bottom:            33vh;
`;

const AboveTheFold = styled.div`
  display:           block;
  position:          relative;
  padding:           35vh 0rem 0;
  overflow:          hidden;
  max-width          100%;
  min-height:        105vh;
  @media (max-width: 900px) {
    min-height:      85vh;
  }
  background:        center,
                     url(${moonLanding}) no-repeat;
  background-size:   cover;
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
  margin:            0 auto;
  text-align:        center;
  width:             100vw;
  display:           block;
  padding:           5rem 0;
  @media (max-width: 900px) {
    padding:         0 0 5rem;
  }
`;

const Others = createGlobalStyle`
/* Other styles */

  {/* aesthetics matter */}
  .beliefs-content {
    background-position: top;
    text-align: center;
    width: 100vw;
    background-size: 20%;
    padding: 12rem 0rem 7rem;
    @media (max-width: 1200px) {
      background-size: 25%;
      padding: 16rem 0rem 7rem;
    }
    @media (max-width: 900px) {
      background-size: 35%;
    }
    @media (max-width: 630px) {
      padding: 5rem 3rem;
    }
  }

  .beliefs-bottom-content__header {
    position: relative;
    @media (max-width: 630px) {
      padding-bottom: 0;
    }
  }

  {/* aesthetics matter */}
  .aesthetics-content {
    text-align: center;
    width:      100vw;
    @media (min-width: 630px) {
      text-align: right;
    }
  }

  .aesthetics-content__header {
    position: relative;
    @media (min-width: 630px) {
      right: 6rem;
    }
  }

  .aesthetics-content__info {
    position: relative;
    @media (min-width: 630px) {
      right: 3rem;
    }
  }

  {/* freedom */}
  .information-content {
    text-align: center;
    width:      100vw;
    @media (min-width: 630px) {
      text-align: right;
    }
  }

  .information-content__header {
    position: relative;
    @media (min-width: 630px) {
      right: 8rem;
    }
  }

  .information-content__info {
    position: relative;
    @media (min-width: 630px) {
      right: 6rem;
    }
  }

  {/* well crafted tools */}
  .technology-content {
    text-align: center;
    width:      100vw;
    @media (min-width: 630px) {
      text-align: left;
    }
  }

  .technology-content__header {
    position: relative;
    @media (min-width: 630px) {
      left: 4rem;
    }
  }

  .technology-content__info {
    position: relative;
    @media (min-width: 630px) {
      left: 8rem;
    }
  }

  {/* simplify the complex */}
  .simplify-content {
    text-align: center;
    width:      100vw;
    @media (min-width: 630px) {
      text-align: left;
    }
  }

  .simplify-content__header {
    position: relative;
    @media (min-width: 630px) {
      left: 0rem;
    }
  }

  .simplify-content__info {
    position: relative;
    @media (min-width: 630px) {
      left: 2rem;
    }
  }

  {/* aesthetics matter */}
  .values-content {
    text-align: center;
    width: 100vw;
    padding: 5rem 0rem 13rem;
    @media (max-width: 1200px) {
      padding: 5rem 0rem 13rem;
    }
    @media (max-width: 950px) {
      padding: 3rem 0rem 13rem;
    }
  }

  .values-content__header {
    position: relative;
    @media (min-width: 1020px) {
      right: 12rem;
    }
    @media (min-width: 630px) {
      right: 6rem;
    }
  }

  {/* aesthetics matter */}
  .we-do-content {
    text-align: center;
    width: 100vw;
  }

  .we-do-content__header {
    position: relative;
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
