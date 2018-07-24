import React from 'react';
import Logo from '../../sprites/star-wars-logo.png';
import { Container } from './style';

const Header = () => (
  <Container>
    <img src={Logo} alt="Star Wars Logo"/>
  </Container>
)

export default Header;