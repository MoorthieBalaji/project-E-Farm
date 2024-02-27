
import React, { useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import greenss from'./Logo/greenss.png'
const Greens = [{
    id:1,
    name:'MalliThalai',
    image:'malli.jpg',
    price:'',
    quantity:''
    },
    {
      id:2,
        name:'PuthinaThalai',
        image:'puthina.jpg',
        price:'',
        quantity:''
        },
        {
            id:3,
            name:'curryvepillai',
            image:'curry.jpg',
            price:'',
            quantity:''
            },
            {
                id:4,
                name:'Milaguthakkali',
                image:'milagu.jpg',
                price:'',
                quantity:''
                },
                {
                    id:5,
                    name:'MurungaKeerai',
                    image:'murunga.jpg',
                    price:'',
                    quantity:''
                    },
                    {
                        id:6,
                        name:'ThoiyaKeerai',
                        image:'thoiya.jpg',
                        price:'',
                        quantity:''
                        },
                        {
                            id:7,
                            name:'ThandangKeerai',
                            image:'thanda.jpg',
                            price:'',
                            quantity:''
                            },
                            {
                                id:8,
                                name:'SivapThandangKeerai',
                                image:'sivaputhanda.jpg',
                                price:'',
                                quantity:''
                                },
                                {
                                    id:9,
                                    name:'PulichaKeerai',
                                    image:'pulicha.jpg',
                                    price:'',
                                    quantity:''
                                    }
    
    
    ];

function Green() {
 const [cards, setCards] = useState(Greens);

 const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCards = [...cards];
    updatedCards[index][name] = value;
    setCards(updatedCards);
 };

 return (
  <><div style={{background:'linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)'}}>
  <Navbar sticky="top"  expand="xxl" className="bg-primary-tertiary nav" style={{background:'linear-gradient(90deg,  #3cd59f 25%,#f8ff00 100%)',height:'100px'}}>
  <Container fluid>
    <Navbar.Brand href="#"><div style={{display:'flex', marginLeft:'80px'}}><img
              src={greenss}
              width="110"
              height="110"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /><h1 style={{marginTop:'35px' ,marginLeft:'10px'}}>Greens</h1></div></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-danger">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
    <div className="Product" style={{ marginTop: '30px', marginBottom: '20px' ,marginLeft:'25px',marginRight:'25px'}}>
      <Row xs={1} md={5}>
        {cards.map((card, index) => (
          <Col key={card.id}>
            <Card style={{ boxShadow: '2px 2px 3px 3px #fffd73' ,background:'linear-gradient(90deg,  #3cd59f 25%,#f8ff00 100%)' }} className="g-5 mt-5">
              <img src={card.image} alt="Card" style={{ height: '160', width: '306' }} />
              <Card.Body>
                <Card.Title style={{ backgroundColor: '#fffd73', textAlign: 'center', borderRadius:'150px' ,width:'200px',marginLeft:'25px' }}>
                 {card.name}
                </Card.Title>
                <Form>
                 <Form.Group controlId="formBasicPrice">
                    <div style={{display:'flex'}}>
                    <Form.Label><h5>Price:</h5></Form.Label>
                    <Form.Control style={{width:'60px', marginLeft:'50px'}}
                      type="text"
                      name="price"
                      value={card.price}
                      onChange={(e) => handleChange(e, index)}
                    /><h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg></h4>
                    </div>
                   
                 </Form.Group>

                 <Form.Group controlId="formBasicQuantity">
                    <div style={{display:'flex'}}> <Form.Label><h5>Quantity:</h5></Form.Label>
                    <Form.Control style={{width:'60px',marginLeft:'16px'}}
                      type="text"
                      name="quantity"
                      value={card.quantity}
                      onChange={(e) => handleChange(e, index)}
                    /><div className='mt-2'>Kg</div></div>
                    
                   
                 </Form.Group>
                </Form>
                <div className="text-center">
                 <button type="submit" className="btn  mt-2"  style={{backgroundColor:'#ede601'}}>
                    Save
                 </button>
                </div>
              </Card.Body>
              <style>
                {`
                 .card:hover {
                    box-shadow: 4px 4px 4px 4px red;
                    transform: scale(1.03);
                    transition: all 0.2s;
                 }
                `}
              </style>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
    </>
 );
}

export default Green;