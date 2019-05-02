import styled from '../../theme';
import Button from '../shared/button';

// import { css } from '../../../theme';
// import theme from from '../../theme/primaryTheme';

const StyledUserSignup = styled.div`
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
  StyledUserSignup,
  StyledSubmit,
  SubmitContainer,
}
