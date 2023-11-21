import React from 'react'
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Navbar.Brand className='pink-text brand-name'>
                            <img
                                src={process.env.PUBLIC_URL + '/logo.png'}
                                width="80"
                                height="80"
                                className="d-inline-block align-top me-2"
                                alt="React Bootstrap logo"
                            />
                            Elibrary
                        </Navbar.Brand>
                    </Link>

                    
                </Container>
            </Navbar>
        </div >
    )
}

export default Header