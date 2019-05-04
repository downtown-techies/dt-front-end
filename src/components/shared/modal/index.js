import React, { useState } from 'react';
import SvgIcon from '../../../assets/svgs';
import Button from '../../shared/button';
import Modal from 'react-modal';
import styled from '../../../theme';
import theme from '../../../theme/primaryTheme';

const customStyles = {
  overlay: {
    zIndex                : 999,
    backgroundColor       : 'rgba(0, 0, 0, 0.75)',
  },
  content : {
    display               : 'flex',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    textAlign             : 'center',
    backgroundColor       : 'rgba(253, 253, 253, 1)',
    transform             : 'translate(-50%, -50%)',
    justifyContent        : 'space-between',
    flexDirection         : 'column',
    minWidth              : '60vw',
    maxWidth              : '80vw',
    minHeight             : '40vh',
    maxHeight             : '90vh',
    border                : 'none',
  }
};

Modal.setAppElement('#modal-hook');

const StyledModal = (props) => {
  const { isOpen, children, modalLabel } = props;

  return (
    <>
      <Modal
         isOpen={isOpen}
         style={customStyles}
         contentLabel={modalLabel}
      >
        {children}
      </Modal>
    </>
  )
}

export default StyledModal;
