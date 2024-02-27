import React from 'react'
import icon from './Logo/icon.png'
import { Nav,Navbar,Container,Card} from 'react-bootstrap'
import {Form} from  'react-bootstrap'
export const BuyerHome = () => {
  return (
    <>
    <div style={{background:'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',height:'100vh' ,width:'100%'}}>
    <Navbar expand="xxl" className="bg-primary-tertiary nav" style={{height:'100px', background:'linear-gradient(90deg, #50A9FF 0%, #92BE9D 100%)'}}>
    <Container fluid>
          <Navbar.Brand href="#home" style={{display:'flex',marginLeft:'50px'}}>
            <img
              src={icon}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /><h2 style={{margin:'20px'}}>Earth's Delight</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll >
            <div style={{display:'flex',marginLeft:'900px', fontSize:'larger'}}>           
            <Nav.Link href="#action1">Cart</Nav.Link>
            <Nav.Link href="#action1">Profile</Nav.Link></div>

          </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='text-center'>
        <div className='container'>
        <div className="row justify-content-center">
       
        {/* <div className="col-md-5"> */}
      {/* <Form style={{backgroundColor:'transparent',border:'3px solid orange',borderRadius:'20px',boxShadow:'4px 4px 4px 4px lightsalmon',height:'30rem',width:'40rem',color:'darkblue',marginTop:'150px'}}> */}
      <Card style={{ boxShadow: '2px 2px 2px 2px blue',height:'200px',width:'550px',background:'linear-gradient(90deg, #efd8ff 30%, #515ada 80%)',marginLeft:'100px' ,marginTop:'120px' }} >
              {/* <img src={} alt="Card" style={{ height:'150px', width: '150px' }} /> */}
              <Card.Body>
                <Card.Title style={{ background: 'linear-gradient(90deg, #efd5ff 70%, #515ada 100%)', textAlign: 'center' }}>
                    <h5>Find Seller Near me</h5>
                </Card.Title>
                <div style={{display:'flex' ,marginTop:'40px'}}><Form.Label><h5>Enter yourplace:</h5></Form.Label>
        <Form.Control
                  type="text" className='w-50'style={{marginBottom:'50px',marginLeft:'20px'}}
                  placeholder="Enter place"
                  name="username" required
                 // value={credentials.username}
                  //onChange={handleInputChange}
                /> <button type="button" className="btn btn-success" style={{width:'60px',height:'39px',marginLeft:'5px'}}>Find</button></div> 
                
      
              
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

    
      
      
       
     {/* </Form> */}
     </div>
     {/* </div> */}
     </div>
     </div>
    </div>
    </>
  )
}
