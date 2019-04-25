import styled from '../../theme';
import Button from '../shared/button';

const StyledSubmit = styled(Button)`
  margin-top: 2rem;
` ;

const StyledUserSignup = styled.div`
  width: 80%;
  padding-top: 5vh;
  min-height: 70vh;
  margin: 0 auto;
` ;

const SubmitContainer = styled.div`
  text-align: right;
` ;

export {
  StyledSubmit,
  StyledUserSignup,
  SubmitContainer
}
