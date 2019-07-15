import styled from '../../theme';
import theme from '../../theme/primaryTheme';

const StyledMeetupList = styled.div`
  background-color: ${theme.colors.white};
  text-align: center;
  color: ${theme.colors.primary};
  padding: 1rem 0;
  z-index: 1;
  position: relative;
`;

const HeaderWrapper = styled.div`
  width: 65vw;
  margin: 2rem auto;
  overflow: hidden;
  @media (max-width: 1120px) {
    width: 75vw;
    padding-top: 5rem;
  }
`;

const ImageContainer = styled.div`
  padding: 0rem 3rem 2rem;
`;

const ListContainer = styled.ul`
  display: flex;
  @media (max-width: 700px) {
    display: block;
  }
`;

const MeetupCard = styled.li`
  flex: 1;
  width: 33.33%;
  margin: 1rem;
  @media (max-width: 700px) {
    width: 100%;
    margin: 2rem 0;
  }
  padding: 0.25rem 0 3rem;
  background-color: ${theme.colors.primary};

  &: hover {
    background-color: rgba(25, 25, 25, 1);
    cursor: pointer;
  }
`;

export {
  ListContainer,
  ImageContainer,
  MeetupCard,
  HeaderWrapper,
  StyledMeetupList,
};
