import styled from '../../theme';

const EyeBrow = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  height: 0;
  top: 0.5rem;
  z-index: 1;
`;

const CarouselWrapper = styled.div`
  max-height: 95vh;
  overflow:hidden;
`;
 
const TaglineWrapper = styled.div`
  padding: 2rem;
  position: absolute;
  top: 20vh;
  width 100vw;

  @media (min-width: 700px) {
    top: 30vh;
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
  CarouselWrapper,
  TaglineWrapper,
  Tagline,
  EyeBrow
};
