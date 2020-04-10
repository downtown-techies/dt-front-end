import styled from '../../../theme';
import Card from '../../shared/Card';

const BeliefsContainer = styled.div`
  position:         relative;
  background-color: black;
  display:          block;
  margin:           0 auto;
  text-align:       center;
  z-index:          1;
`;

const FlashingLightContainer = styled.div`
  padding:         6rem 0 0rem;
  @media (max-width: 630px) {
    padding:       0;
  }
`;

const FlashingLight = styled(Card)`
`;

export {
  BeliefsContainer,
  FlashingLightContainer,
  FlashingLight,
};
