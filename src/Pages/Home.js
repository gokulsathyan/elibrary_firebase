import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const viewBooks = () => {
        navigate('/books');
    }
    return (
        <div>

            <Container>
                <Row>
                    <Col lg={6}>
                        <img className="w-100 mb-4" style={{ height: '500px', marginTop: '4.5rem' }} src={process.env.PUBLIC_URL + '/bg1.png'}></img>
                    </Col>
                    <Col lg={6}>
                        <div className='p-5 mt-5'>
                            <h1 className='pink-text'>E-Library, A hub of knowledge for transformation.</h1>
                            <p className='mt-5 pe-3 fs-5'>Each Collection of our Library represents a domain of human development wisdom that influences—or is influenced by—coaching. Connecting these fields of inquiry is our commitment to investigate how coaching contributes to the United Nations Action Plan for societal well-being. As a holistic system, these four pillars inform our research focus, which in turn generates our body of knowledge.</p>
                        </div>
                        <div className='text-center mb-4'><button className='shop-now' onClick={viewBooks}>View Books</button></div>

                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6} className='p-5'>
                        <Card className='home-card text-center pt-2'>
                            <Card.Img variant="top" height={'300px'} src={process.env.PUBLIC_URL + '/assets/img1.jpg'} className='p-2' />
                            <Card.Body>
                                <Card.Title className='pink-text'><h4>Unlocking knowledge:</h4></Card.Title>
                                <Card.Text>
                                    <h6 className=''>The benefits of establishing a free eBook library for institutes </h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6} md={6} sm={6} className='p-5'>
                        <Card className='home-card text-center pt-2'>
                            <Card.Img variant="top" height={'300px'} src={process.env.PUBLIC_URL + '/assets/img2.jpg'} className='p-2' />
                            <Card.Body>
                                <Card.Title className='pink-text'><h4>Good Textbooks :</h4></Card.Title>
                                <Card.Text>
                                    <h6 className=''>Reading and studying from good text books is extremely important </h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>



                </Row>

            </Container>

        </div>
    )
}

export default Home