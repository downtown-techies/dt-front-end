import React, { useState } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';
import Button from '../shared/button';
import Modal from '../shared/modal';

const MeetupsModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  }

  const handleHide = () => {
    setShowModal(false);
  }

  const modal = showModal ? (
    <Modal>
      Foo
      <Button buttonStyle='unstyled' onClick={handleHide}>
        X
      </Button>
    </Modal>
  ) : null;

  return (
    <>
      <Button buttonStyle='unstyled' onClick={handleShow}>
        <SvgIcon name='meetup' viewBox='0 0 448 512' fill='#fff' />
      </Button>
      {modal}
    </>
  );
}

export default MeetupsModal;
