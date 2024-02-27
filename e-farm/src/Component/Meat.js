
import React, { useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Component/Veg.css'
import meat1 from './Logo/meat1.png'
const Meats = [{
    id:1,
    name:'broiler Chicken',
    image:'broiler.jpg',
    price:'',
    quantity:''
  },
  {
    id:2,
    name:'NaatuKozhli Chicken',
    image:'nk.jpg',
    price:'',
    quantity:''
  },
  {
    id:3,
    name:'Fish',
    image:'fish.jpg',
    price:'',
    quantity:''
  },
  {
    id:4,
    name:'Beef',
    image:'beef.jpg',
    price:'',
    quantity:''
  },
  {
    id:5,
    name:'Pork',
    image:'pork.jpg',
    price:'',
    quantity:''
  },
  {
    id:6,
    name:'Prawn',
    image:'prawn.jpg',
    price:'',
    quantity:''
  },
  {
    id:7,
    name:'Mutton',
    image:'mutton.jpg',
    price:'',
    quantity:''
  },
  
  ]

function Meat() {
 const [cards, setCards] = useState(Meats);

 const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCards = [...cards];
    updatedCards[index][name] = value;
    setCards(updatedCards);
 };

 return (
  <> <div style={{background: 'linear-gradient(90deg, #fcff9e -10%, #c67700 100%)'}}><Navbar sticky="top"  expand="xxl" className="bg-primary-tertiary nav" style={{background: 'linear-gradient(90deg,#c67700 5%, #fcff9e 60%)',height:'100px'}}>
  <Container fluid >
    <Navbar.Brand href="#"><div style={{display:'flex',marginLeft:'80px'}}><img
              src={meat1}
              width="110"
              height="110"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /><h1 style={{marginTop:'35px'}}>Meat</h1></div></Navbar.Brand>
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
            <Card style={{ boxShadow: '2px 2px 3px 3px #ffe877 ',background: 'linear-gradient(90deg,#c67700 5%, #fcff9e 60%)'}} className="g-5 mt-5">
              <img src={card.image} alt="Card" style={{ height: '160', width: '306' }} />
              <Card.Body>
                <Card.Title style={{ backgroundColor: '#ffe877 ', textAlign: 'center' , borderRadius:'150px' ,width:'200px',marginLeft:'25px'}}>
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
                 <button type="submit" className="btn btn-danger mt-2" >
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

export default Meat;