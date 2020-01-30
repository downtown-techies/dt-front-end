import styled from '../../theme';

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
  min-height: 85vh;
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
  padding: 22vh 2rem 4rem;
  display: inline-block;
  width 100vw;
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
  SVGWrapper,
  UserFormWrapper,
  Tagline,
  EyeBrow
};
