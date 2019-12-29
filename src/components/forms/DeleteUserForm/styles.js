import styled from '../../../theme';
import Button from '../../shared/Button';

const StyledDeleteUser = styled.div`
  width: 80%;
  padding-top: 5vh;
  min-height: 70vh;
  margin: 0 auto;
` ;

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
  StyledDeleteUser,
  StyledSubmit,
  SubmitContainer,
  StyledRadioContainer,
}
