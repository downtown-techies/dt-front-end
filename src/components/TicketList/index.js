import React, { useState, useEffect } from 'react';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import Link from '../shared/Link';
import Text from '../shared/Text';
import theme from '../../theme/primaryTheme';
import { 
  ListContainer,
  ImageContainer,
  TicketCard,
  StyledTicketList,
  HeaderWrapper, 
} from './styles';

const jwtToken = localStorage.token;

const TicketList= (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = () => {
    apiRequest.get(
      `${apiBaseUrl}/tickets`,
      jwtToken
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

  const TicketList = (data) => {
    if ( data.length > 0 ) {
      console.log(data)
      const list = data.map((ticket) => {
        console.log(ticket);
        const {
          submitter_name: submitterName, submitter_email: submitterEmail, id,
          point_of_contact: pointOfContact, contact_email: contactEmail,
          gig_category: relationship, technical_requirements: technicalRequirements,
          project_length: projectLength, project_descriptiopn: projectDescription,
          createdAt, contact_category: contactRelationship,
        } = ticket;

        return (
          <TicketCard key={`${ticket.name}-${ticket.id}`}>
            <Text tag='h3' textStyle='big' color='white'>{pointOfContact ? pointOfContact : 'empty'}</Text>
            {submitterName ? (
              <>
                <Text color='white'>Submitter Name: {submitterName}</Text>
              </>
            ) : (null)}
            {submitterEmail? (
              <>
                <Text color='white'>Submitter Email: {submitterEmail}</Text>
              </>
            ) : (null)}
            {pointOfContact ? (
              <>
                <Text color='white'>Point Of Contact: {pointOfContact}</Text>
              </>
            ) : (null)}
            {contactEmail ? (
              <>
                <Text color='white'>Contact Email: {contactEmail}</Text>
              </>
            ) : (null)}
            {contactRelationship ? (
              <>
                <Text color='white'>Contact's Relationship to project: {relationship}</Text>
              </>
            ) : (null)}
            {relationship ? (
              <>
                <Text color='white'>Relationship to project: {relationship}</Text>
              </>
            ) : (null)}
            {technicalRequirements ? (
              <>
                <Text color='white'>Technical Requirement: {technicalRequirements}</Text>
              </>
            ) : (null)}
            {projectLength ? (
              <>
                <Text color='white'>Project Length: {projectLength}</Text>
              </>
            ) : (null)}
            {projectDescription ? (
              <>
                <Text color='white'>Project Description: {projectDescription}</Text>
              </>
            ) : (null)}
            {createdAt ? (
              <>
                <Text color='white'>Ticket Submitted: {createdAt}</Text>
              </>
            ) : (null)}
          </TicketCard>
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
      </>
    )}
  }

  return (
    <>
      <StyledTicketList>
        <HeaderWrapper>
          <Text tag='h3' color={theme.colors.accent} textStyle='callToAction'>Tickets</Text> 
        </ HeaderWrapper>
        {TicketList(data)}
      </StyledTicketList>
    </>
  )
}

export default TicketList;
