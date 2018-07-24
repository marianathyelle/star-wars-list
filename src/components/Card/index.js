import React from 'react';
import PropTypes from 'prop-types';
import { ContentCard, HeaderCard, List } from './styles';

const Card = ({ person }) => (
  <div className="col-lg-3"> 
    <ContentCard>
      <HeaderCard>
        <h1>{person.name}</h1>
      </HeaderCard>
      <List>
        <li>
          <strong>Birth Year:</strong>
          <span>{person.birth_year}</span>
        </li>
        <li>
          <strong>Height:</strong>
          <span>{person.height}</span>
        </li>
        <li>
          <strong>Gender:</strong>
          <span>{person.gender}</span>
        </li>
        <li>
          <strong>Hair Color:</strong>
          <span>{person.hair_color}</span>
        </li>
        <li>
          <strong>Skin Color:</strong>
          <span>{person.skin_color}</span>
        </li>
        <li>
          <strong>Eyes Color:</strong>
          <span>{person.eye_color}</span>
        </li>
      </List>  
    </ContentCard>   
  </div>
)

Card.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    birth_year: PropTypes.string,
    height: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
  }).isRequired
}

export default Card;