import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';
import Text from '../shared/text';
import Button from '../shared/button';
import StyledModal from '../shared/modal';
import styled from '../../theme';
import theme from '../../theme/primaryTheme';

const MeetupsList = styled.ul`
`;

const Meetup = styled.li`
  border-bottom: 2px solid ${theme.colors.border};
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: ${theme.colors.backgroundLight};

  &:last-child {
    border-radius: 0 0 0.25rem 0.25rem;
  }

  &: hover {
    background-color: ${theme.colors.border};
    cursor: pointer;
  }
`;

const ModalCloseButton = styled(Button)`
  margin-top: 1rem;
`;

const MeetupsModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getMeetups();
  }, []);

  const getMeetups = () => {
    apiRequest.get(
      `${apiBaseUrl}/meetups`,
    )
    .then(function (response) {
      if (response.status === 200){
        setData(...data, response.data);
      } else {
        console.log(response.status);
      };
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  // event handlers
  //
  const openModal = () => {
    console.log('data', data);
    setShowModal(true);
  }

  const afterOpenModal = () => {
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const MeetupList = (data) => {
    if ( data.length > 0 && showModal ) {
      const list = data.map((meetup) => {
        const {
          name, organizer, contact_email: contactEmail,
          city, state_abbr: state, postal_code: postalCode
        } = meetup;
        return (
          <Meetup key={`${meetup.name}-${meetup.id}`}>
            <Link address={meetup.url}>
              <Text tag='h3' textStyle='title'>{name}</Text>
              <Text textStyle='info'><strong>Organizer:</strong> {organizer || 'Currently Unavailable'}</Text>
              {contactEmail.length > 0 ? 
                <Text textStyle='info'><strong>Contact Email:</strong> <Link address={`mailto:${contactEmail}`}>{contactEmail}</Link></Text>
                : null 
              }
              <Text textStyle='info'>{city}{city.length > 0 ? ',' : ''} {state} {postalCode}</Text>
            </Link>
          </Meetup>
        )
      });

      return (
        <MeetupsList>
          {list}
        </MeetupsList>
      )
    } else { return (
      <>
        <Text tag='p'>List is empty, please</Text>
        <Text tag='p'> email: <Link address='mailto:info@downtowntechies.com'>info@downtowntechies.com</Link></Text>
        <Text tag='p'>for more info</Text>
      </>
    )}
  }

  return (
    <>
      <Button buttonStyle='unstyled' onClick={openModal}>
        <SvgIcon name='meetup' viewBox='0 0 448 512' fill='#fff' />
      </Button>
      <StyledModal
         isOpen={showModal}
         onAfterOpen={afterOpenModal}
         onRequestClose={closeModal}
         modalLabel='Meetups List'
      >
        <Text tag='h2' textStyle='modalHeadline' color={theme.colors.white}>Meetups</Text>
        {MeetupList(data)}
        <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
      </StyledModal>
    </>
  )
}

export default MeetupsModal;
