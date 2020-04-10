import styled from '../../../theme';
import Card from '../../shared/Card';

const ValuesContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

const SolarContainer = styled.div`
  padding: 0 0 4rem;
  background-color: white;
`;

const Solar = styled(Card)`
`;

export {
  ValuesContainer,
  SolarContainer,
  Solar,
};
