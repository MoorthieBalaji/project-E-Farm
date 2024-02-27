
import React, { useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import fruits1 from './Logo/fruits1.png'
const Fruits = [{
    id:1,
    name:'Appple',
    image:'ap2.jpg',
    price:''
},
{
    id:2,
    name:'Orange',
    image:'orange.jpg',
    price:''
},
{
    id:3,
    name:'Pomagranete',
    image:'poma.jpg',
    price:''
},
{
    id:4,
    name:'Graphes',
    image:'grape.jpg',
    price:''
},
{
    id:5,
    name:'Papaya',
    image:'papaya.jpg',
    price:''
},
{
    id:6,
    name:'Guava',
    image:'guava.jpg',
    price:''
},
{
    id:7,
    name:'Watermelon',
    image:'watermelon.jpg',
    price:''
},
{
    id:8,
    name:'Banana',
    image:'banana.jpg',
    price:''
},
{
    id:9,
    name:'Mango',
    image:'mango.jpg',
    price:''
},
{
    id:10,
    name:'PineApple',
    image:'pine.jpg',
    price:''
},
{
    id:11,
    name:'Strawberry',
    image:'straw.jpg',
    price:''
},
{
    id:12,
    name:'Gooseberry',
    image:'goose.jpg',
    price:''
},
{
    id:13,
    name:'Cherry',
    image:'cherry.jpg',
    price:''
},
{
    id:14,
    name:'CustardApple',
    image:'custard.jpg',
    price:''
},
{
    id:15,
    name:'Chikoo',
    image:'chikoo.jpg',
    price:''
},
];

function Fruit() {
 const [cards, setCards] = useState(Fruits);

 const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCards = [...cards];
    updatedCards[index][name] = value;
    setCards(updatedCards);
 };

 return (
  <>
  <div style={{background:'linear-gradient(90deg,#74e5ff -50%,#efd5ff 100%)'}}>
  <Navbar sticky="top"  expand="xxl" className="bg-primary-tertiary nav" style={{background:'linear-gradient(90deg,#7ff5ff 0%,#ffd5ff 60%)',height:'100px'}}>
    <Container fluid>
      <Navbar.Brand href="#"><div style={{display:'flex',marginLeft:'80px'}}><img
              src={fruits1}
              width="110"
              height="110"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /><h1 style={{marginTop:'35px'}}>Fruits</h1></div></Navbar.Brand>
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
    <div className="Product" style={{ marginTop: '30px', marginBottom: '20px',marginLeft:'25px',marginRight:'25px' }}>
      <Row xs={1} md={5}>
        {cards.map((card, index) => (
          <Col key={card.id}>
            <Card style={{ boxShadow: '2px 2px 3px 3px pink',background:'linear-gradient(90deg,#7ff5ff 0%,#ffd5ff 60%)'  }} className="g-5 mt-5">
              <img src={card.image} alt="Card"  />
              <Card.Body>
                <Card.Title style={{ backgroundColor: 'pink', textAlign: 'center', borderRadius:'150px' ,width:'150px',marginLeft:'45px'}}>
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
                 <button type="submit" className="btn btn-primary mt-2" >
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

export default Fruit;