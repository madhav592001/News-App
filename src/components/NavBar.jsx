import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { getFavourites } from '../redux/newsActions';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  let dispatch = useDispatch();

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>News-App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(getFavourites())}
          >
            Favourites
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
