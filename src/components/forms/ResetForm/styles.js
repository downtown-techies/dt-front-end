import styled from '../../../theme';
import Button from '../../shared/Button';

const StyledReset = styled.div`
  width: 80%;
  padding-top: 5vh;
  min-height: 70vh;
  margin: 0 auto;
` ;

const SubmitContainer = styled.div`
  text-align: right;
` ;

const StyledSubmit = styled(Button)`
  margin-top: 2rem;
` ;

export {
  StyledReset,
  StyledSubmit,
  SubmitContainer,
}
