import styled from '../../../theme';
import primaryTheme from '../../../theme/primaryTheme';
import space from '../../../assets/images/space.jpg';
import Card from '../../shared/Card';

const EthosContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

const Aesthetics = styled(Card)`
`;

const Technology = styled(Card)`
  display:           block;
  position:          relative;
  padding:           45vh 0rem 30vh;
  overflow:          hidden;
  width:             100vw;
  min-height:        65vh;
  background:        center,
                     url(${space}) no-repeat ${primaryTheme.colors.primary};
  background-size:   100vw;
  @media (max-width: 900px) {
    background:      center,
                     url(${space}) no-repeat ${primaryTheme.colors.primary};
    background-size: 100%;
  }
`;

const Simplify = styled(Card)`
  display:           block;
  position:          relative;
  padding:           45vh 0rem 30vh;
  overflow:          hidden;
  width:             100vw;
  min-height:        65vh;
  background:        center,
                     url(${space}) no-repeat ${primaryTheme.colors.primary};
  background-size:   100vw;
  @media (max-width: 900px) {
    background:      center,
                     url(${space}) no-repeat ${primaryTheme.colors.primary};
    background-size: 100%;
  }
`;


const Information = styled(Card)`
  display:           block;
  position:          relative;
  padding:           45vh 0rem 30vh;
  overflow:          hidden;
  width:             100vw;
  min-height:        65vh;
  background:        center,
                     url(${space}) no-repeat ${primaryTheme.colors.primary};
  background-size:   100vw;
  @media (max-width: 900px) {
    background:      center,
                     url(${space}) no-repeat ${primaryTheme.colors.primary};
    background-size: 100%;
  }
`;

export {
  EthosContainer,
  Aesthetics,
  Technology,
  Simplify,
  Information,
};
