import styled from '../../../theme';
import Button from '../../shared/Button';

const ResponseMessage = styled.div`
  margin-top: 1rem;

  @media (max-width: 1024px) {
    margin-top: unset;
    max-width: 75%;
    margin: 0 auto;
  }
`

const ModalCloseButton = styled(Button)`
  margin-top: 1rem;
`;

export {
  ModalCloseButton,
  ResponseMessage
};
