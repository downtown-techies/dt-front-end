import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import Link from '../shared/link';
import Text from '../shared/text';
import Image from '../shared/image';
import images from '../../assets/images/meetupImages';
import theme from '../../theme/primaryTheme';
import { 
  ListContainer,
  ImageContainer,
  MeetupCard,
  StyledMeetupList,
  HeaderWrapper, 
} from './styles';


const MeetupList= (props) => {
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

  const MeetupList = (data) => {
    if ( data.length > 0 ) {
      const list = data.map((meetup) => {
        const {
          name, organizer, contact_email: contactEmail,
          city, state_abbr: state, postal_code: postalCode
        } = meetup;

        const imageSrc = name.toLowerCase().replace(/ /g, '');

        return (
          <MeetupCard key={`${meetup.name}-${meetup.id}`}>
            <Link address={meetup.url}>
              <Text tag='h3' textStyle='cardTitle' color='white'>{name}</Text>
              <ImageContainer>
                <Image src={images[`${imageSrc}`]} />
              </ ImageContainer>
              <Text textStyle='default' color='white'><strong>Organizer:</strong> {organizer || 'Currently Unavailable'}</Text>
              {contactEmail.length > 0 ?
                <Text textStyle='default' color='white'><strong>Contact Email:</strong> {contactEmail || 'Currently Unvailable'}</Text>
                : null
              }
              <Text textStyle='default' color='white'>{city}{city.length > 0 ? ',' : ''} {state} {postalCode}</Text>
            </Link>
          </MeetupCard>
        )
      });

      return (
        <ListContainer>
          {list}
        </ListContainer>
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
      <StyledMeetupList>
        <HeaderWrapper>
          <Text tag='h3' color={theme.colors.primary} textStyle='callToAction'>Connect with a Meetup Near You</Text> 
        </ HeaderWrapper>
        {MeetupList(data)}
      </StyledMeetupList>
    </>
  )
}

export default MeetupList;







