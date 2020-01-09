import styled from '../../../theme';
import Button from '../../shared/Button';

const StyledAddAccount = styled.div`
  width: 80%;
  padding-top: 5vh;
  min-height: 70vh;
  margin: 0 auto 3rem;
` ;

const SubmitContainer = styled.div`
  text-align: right;
` ;

const StyledSubmit = styled(Button)`
  margin-top: 2rem;
` ;

export {
  StyledAddAccount,
  StyledSubmit,
  SubmitContainer,
}
