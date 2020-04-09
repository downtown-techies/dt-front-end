import styled from '../../../theme';
import Card from '../../shared/Card';

const EthosContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

const AestheticsContainer = styled.div`
  background-color: white;
`;

const Aesthetics = styled(Card)`
`;

const InformationContainer = styled.div`
  background-color: white;
`;
const Information = styled(Card)`
`;

const TechnologyContainer = styled.div`
  background-color: white;
`;
const Technology = styled(Card)`
`;

const SimplifyContainer = styled.div`
  background-color: white;
`;

const Simplify = styled(Card)`
`;

export {
  EthosContainer,
  AestheticsContainer,
  TechnologyContainer,
  SimplifyContainer,
  InformationContainer,
  Aesthetics,
  Technology,
  Simplify,
  Information,
};
