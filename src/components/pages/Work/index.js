import React from 'react';
import Text from '../../shared/Text';
import theme from '../../../theme/primaryTheme';
import {companies} from './companies.js';
import { WorkContainer, CompaniesContainer, ImageContainer, Image } from './styles.js';

const companyImages = companies.map((company, i) => {
  const {image, alt} = company;
  return(
        <ImageContainer>
          <Image src={image} alt={alt} key={i} />
        </ImageContainer>
  )
});

const Work = (props) => {
  return (
    <WorkContainer>
      <Text
        className="work-container__header"
        sizeFactor={1}
        color={theme.colors.secondary}
        textStyle="cardHeadline">
        Where our<br/>developers’ code lives
      </Text>
      <CompaniesContainer>
        {companyImages}
      </CompaniesContainer>
    </WorkContainer>
  );
}

export default Work;

