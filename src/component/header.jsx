import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAlignRight, FaAlignLeft } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function HeaderNavigation() {
  const [toggle, setToggle] = React.useState(false);

  const toggleNav = () => {
    setToggle((prevToggle) => {
      return prevToggle === false ? true : false;
    });
  };

  return (
    <div>
      <Navbar expand='lg' className='bg-body-tertiary header' bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src='/images/logo.png' width='60' height='70' className='d-inline-block align-top' alt='' />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={toggleNav}>
            {toggle === true ? <FaAlignLeft /> : <FaAlignRight />}
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav className='justify-content-end'>
              <LinkContainer to='/'>
                <Nav.Link>Beranda</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link>Profil Lembaga</Nav.Link>
              </LinkContainer>

              <NavDropdown title='Program' id='basic-nav-dropdown'>
                <LinkContainer to='/binasehati'>
                  <NavDropdown.Item>Bina Sehati</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/binagenerasi'>
                  <NavDropdown.Item>Bina Generasi</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/binalestari'>
                  <NavDropdown.Item>Bina Lestari</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/tanggapbencana'>
                  <NavDropdown.Item>Tanggap Bencana</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/qurban'>
                  <NavDropdown.Item>Qurban Peduli</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavigation;
