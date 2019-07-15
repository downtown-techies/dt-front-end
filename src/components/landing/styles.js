import styled from '../../theme';
import cityBackground from '../../assets/images/cityBackground.jpg';
import mobileCityBackground from '../../assets/images/mobileCityBackground.jpg';

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
  margin-top: -72px;
  padding-top: 72px;
  height: 110vh;
  background: center no-repeat, 
              url(${cityBackground}),
              #222;
  @media (max-width: 1120px) {
    height: 100vh;
    background: center  no-repeat, 
              url(${mobileCityBackground}),
              #222;
  }
  @media (max-width: 700px) {
    height: 120vh;
  }
  @media (max-width: 400px) {
    height: 140vh;
  }
  @media (max-width: 350px) {
    height: 180vh;
  }
  @media (orientation: landscape) {
    height: 100vh;
  }
  @media (orientation: landscape) and (max-width: 900px) {
    height: 180vh;
  }
`;

const TaglineWrapper = styled.div`
  padding: 2rem;
  position: absolute;
  top: 20vh;
  width 100vw;
  @media (min-width: 700px) {
    top: 20vh;
  }
`;

const Tagline = styled.div`
  position: relative;
  height: 0;
  max-width: 90%;
  margin: 0 auto;
  z-index: 1;

  @media (min-width: 700px) {
    max-width: 50%;
  }
`;

export {
  LandingWrapper,
  TaglineWrapper,
  Tagline,
  EyeBrow
};
