import styled from '../../../theme';
import Button from '../../shared/Button';

// import { css } from '../../../theme';
// import theme from from '../../theme/primaryTheme';

const StyledTicket = styled.div`
  width: 80%;
  padding: 5vh 0;
  min-height: 70vh;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1700px) {
    width: 30%;
  }
` ;

const StyledInputContainer = styled.div`
  margin: 1rem 0;
`;

const StyledRadioContainer = styled.div`
  margin-top: 1rem;
`;

const SubmitContainer = styled.div`
  text-align: right;
` ;

const StyledSubmit = styled(Button)`
  margin-top: 2rem;
` ;

export {
  StyledTicket,
  StyledSubmit,
  StyledInputContainer,
  SubmitContainer,
  StyledRadioContainer,
}
