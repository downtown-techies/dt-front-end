import styled from '../../theme';
import theme from '../../theme/primaryTheme';

const StyledTicketList = styled.div`
  background-color: ${theme.colors.primary};
  text-align: center;
  color: ${theme.colors.primary};
  padding: 1rem 0;
  @media (max-width: 700px) {
    padding-bottom: 0;
  }
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

const TicketCard = styled.li`
  flex: 1;
  width: 33.33%;
  margin: 1rem;
  @media (max-width: 700px) {
    width: 100%;
    margin: 2rem 0;
    &:last-of-type{
      margin-bottom: 0;
    }
  }
  padding: 3rem 0;
  background-color: ${theme.colors.primary};

  &: hover {
    background-color: rgba(25, 25, 25, 1);
    cursor: pointer;
  }
`;

export {
  ListContainer,
  ImageContainer,
  TicketCard,
  HeaderWrapper,
  StyledTicketList,
};

