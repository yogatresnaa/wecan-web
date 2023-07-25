import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAlignRight, FaAlignLeft } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
          <Navbar.Brand href='#home'>
            <img src='/images/logo.png' width='60' height='70' className='d-inline-block align-top' alt='' />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={toggleNav}>
            {toggle === true ? <FaAlignLeft /> : <FaAlignRight />}
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
            <Nav className='justify-content-end'>
              <Nav.Link href='#home'>Beranda</Nav.Link>
              <Nav.Link href='#link'>Profil</Nav.Link>

              <NavDropdown title='Program' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Bina Sehati</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Bina Generasi</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Bina Lestari</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Tanggap Bencana</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Qurban Peduli</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavigation;
