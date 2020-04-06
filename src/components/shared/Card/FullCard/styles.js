import styled from '../../../../theme';
import theme from '../../../../theme/primaryTheme';
import space from '../../../../assets/images/space.jpg';

const StyledCard = styled.div`
  display:           block;
  position:          relative;
  padding:           30vh 0rem 35vh;
  overflow:          hidden;
  width:             100vw;
  min-height:        65vh;
  background:        center,
                     url(${space}) no-repeat ${theme.colors.primary};
  background-size:   100vw;
  @media (max-width: 900px) {
    background:      center,
                     url(${space}) no-repeat ${theme.colors.primary};
    background-size: 100%;
  }
`;

export {
  StyledCard
}
