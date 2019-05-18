import React, { useState } from 'react';
import Text from '../shared/text';
import StyledModal from '../shared/modal';
import theme from '../../theme/primaryTheme';

import {
  ModalCloseButton,
  ResponseMessage
} from './styles';


const ErrorsModal = (props) => {
  const [showModal, setShowModal] = useState(true);
  const { errors, response } = props;

  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  }

  const title = (errors) => {
    return errors ? (
      <Text tag='h2' textStyle='modalHeadline' color={theme.colors.white}>Errors</Text>
    ) : (
      <Text tag='h2' textStyle='modalHeadline' color={theme.colors.white}>Sucess!</Text>
    )     
  }

  const message = (response) => {
    return ( 
      <Text tag='p' color={theme.colors.primary}>{response}</Text>
    )
  }

  return (
    <>
      <StyledModal
         isOpen={showModal}
         onRequestClose={closeModal}
         modalLabel='Errors List'
      >
        {title(errors)}
        <ResponseMessage>
          {message(response)}
        </ResponseMessage>
        <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
      </StyledModal>
    </>
  )
}

export default ErrorsModal;
