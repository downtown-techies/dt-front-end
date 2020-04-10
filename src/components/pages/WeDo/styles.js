import styled from '../../../theme';
import Card from '../../shared/Card';

const WeDoContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

const RockyVectorContainer = styled.div`
  padding: 6rem 0 0rem;
`;

const RockyVector = styled(Card)`
`;

export {
  WeDoContainer,
  RockyVectorContainer,
  RockyVector,
};
