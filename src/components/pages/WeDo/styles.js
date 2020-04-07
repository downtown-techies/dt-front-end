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
  padding: 0 0 4rem;
  background-color: white;
`;

const RockyVector = styled(Card)`
  padding: 1rem 0;
`;

export {
  WeDoContainer,
  RockyVectorContainer,
  RockyVector,
};
