import styled from '../../../theme';
import Card from '../../shared/Card';

const BeliefsContainer = styled.div`
  position: relative;
  background-color: black;
  display: block;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

const FlashingLightContainer = styled.div`
  padding: 6rem 0 0rem;
`;

const FlashingLight = styled(Card)`
  padding: 1rem 0;
`;

export {
  BeliefsContainer,
  FlashingLightContainer,
  FlashingLight,
};
