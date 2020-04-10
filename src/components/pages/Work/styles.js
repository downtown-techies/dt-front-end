import styled from '../../../theme';

const WorkContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 6rem 0 3rem;
  text-align: center;
  background-color: white;
  z-index: 1;
`;

const CompaniesContainer = styled.div`
  padding: 5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  flex: 0 33%;
  height: 7rem;
  padding: 2rem 1rem;
  text-align: center;
`;

const Image = styled.img`
  margin: 0 auto;
  max-height: 100%;
`;

export {
  CompaniesContainer,
  Image,
  ImageContainer,
  WorkContainer
};
