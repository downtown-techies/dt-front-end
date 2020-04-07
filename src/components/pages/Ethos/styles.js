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
  padding: 3rem 0;
  background-color: white;
`;

const Aesthetics = styled(Card)`
  padding: 1rem 0;
`;

const InformationContainer = styled.div`
  padding: 3rem 0;
  background-color: white;
`;
const Information = styled(Card)`
`;

const TechnologyContainer = styled.div`
  padding: 3rem 0;
  background-color: white;
`;
const Technology = styled(Card)`
  padding: 10rem 0;
`;

const SimplifyContainer = styled.div`
  padding: 3rem 0;
  background-color: white;
`;
const Simplify = styled(Card)`
  padding: 1rem 0;
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
