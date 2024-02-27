import React from 'react'
import { Nav,Navbar,Container} from 'react-bootstrap'
//import {Container-fluid} from 'react-bootstrap';
import '../Component/Farmer.css'
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import icon from './Logo/icon.png'
// import Veg from './Veg';
//import Fruit from './Fruit';
// import Green from './Green';
//import Contents from './Contents'
//import Products from './Products';
//background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
 import ve from './Logo/ve.png'
 import meat3 from './Logo/meat3.png'
  import fruits1 from './Logo/fruits1.png'
import greenss from './Logo/greenss.png'
import dp1 from './Logo/dp1.png'
 import {Link} from 'react-router-dom'
 import '../Component/SellerHome.css'
 import { Card ,Row} from 'react-bootstrap';

export const SellerHome = () => {
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
            <Nav.Link href="#action1">Customer</Nav.Link>
            <Nav.Link href="#action1">Profile</Nav.Link></div>

          </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
      
     <div className="img" style={{marginTop:'70px', border:'5px solid lightBlue',borderRadius:'20px',color:'white',boxShadow:'4px 4px 24px 24px ',height:'500px'}}>
       <h2 className='store' style={{marginTop:'30px'}} >STORE</h2>
        <Row xs={1} md={5} style={{marginTop:'80px',marginRight:'100px'}}>
        <Link to='/Veg'>
        <Card style={{ boxShadow: '2px 2px 2px 2px blue',height:'200px',width:'175px',background:'linear-gradient(90deg, #efd8ff 30%, #515ada 80%)',marginLeft:'100px' }} >
              <img src={ve} alt="Card" style={{ height:'150px', width: '150px' }} />
              <Card.Body>
                <Card.Title style={{ background: 'linear-gradient(90deg, #efd5ff 70%, #515ada 100%)', textAlign: 'center' }}>
                    <h5>Vegetables</h5>
                </Card.Title>
               
              
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
            </Link>
            <Link to='/Fruit'>
            <Card style={{ marginLeft:'90px', boxShadow: '2px 2px 2px 2px blue',height:'200px',width:'175px',background:'linear-gradient(90deg, #efd5ff 0%, #515ada 100%)' }}>
              <img src={fruits1} alt="Card" style={{ height:'150px', width: '150px' } } />
              <Card.Body>
                <Card.Title style={{ background: 'linear-gradient(90deg, #efd5ff 70%, #515ada 100%)', textAlign: 'center' }}>
                    <h5>Fruits</h5>
                </Card.Title>
               
              
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
            </Link>
            <Link to='/Green'>
            <Card style={{ marginLeft:'80px', boxShadow: '2px 2px 2px 2px blue',height:'200px',width:'175px',background:'linear-gradient(90deg, #efd8ff 30%, #515ada 80%)' }} >
              <img src={greenss} alt="Card" style={{ height:'150px', width: '150px' }} />
              <Card.Body>
                <Card.Title style={{ background: 'linear-gradient(90deg, #efd5ff 70%, #515ada 100%)', textAlign: 'center' }}>
                    <h5>Greens</h5>
                </Card.Title>
               
              
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
            </Link>
            <Link to='/Meat'>
            <Card style={{ marginLeft:'70px', boxShadow: '2px 2px 2px 2px blue',height:'200px',width:'175px',background:'linear-gradient(90deg, #efd8ff 30%, #515ada 80%)' }} >
              <img src={meat3} alt="Card" style={{ height:'150px', width: '150px' }} />
              <Card.Body>
                <Card.Title style={{ background: 'linear-gradient(90deg, #efd5ff 70%, #515ada 100%)', textAlign: 'center' }}>
                    <h5>Meats</h5>
                </Card.Title>
               
              
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
            </Link>
            <Link to='/DiaryProducts'>
            <Card style={{ marginLeft:'50px', boxShadow: '2px 2px 2px 2px blue',height:'200px',width:'175px',background:'linear-gradient(90deg, #efd8ff 30%, #515ada 80%)' }} >
              <img src={dp1} alt="Card" style={{ height:'150px', width: '150px' }} />
              <Card.Body>
                <Card.Title style={{ background: 'linear-gradient(90deg, #efd5ff 70%, #515ada 100%)', textAlign: 'center' }}>
                    <h5>Diary</h5>
                    <h5>Products</h5>
                </Card.Title>
               
              
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
            </Link>
        </Row>
         </div>   
      </Container>
      {/* <Container> */}
      {/* <Row className='justify-content-center align-item-center mt-5 '>
            <Col lg={8}>
            <Carousel className='nnav'>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={'vv.jpg'}  alt="FirstSlide"/>
        <Carousel.Caption>
          <h3>Fresh Vegetables and Fruits</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="d-block w-100" src={'nonveg1.jpg'} alt="SecondSlide" />
        <Carousel.Caption>
          <h3>Fresh Meats</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="d-block w-100" src={'milk.jpg'} alt="ThirdSlide" />
        <Carousel.Caption>
          <h3>Pure Milk</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row> */}
        {/* </Container> */}
      

{/*        
       <div style={{display:'flex'}}> <div><img src={ve} style={{marginTop:'70px',marginLeft:'50px '}}alt="Description" /></Link><h2>Vegetables</h2></div>  <div><Link to='/Green'><img src={greenss} style={{ marginLeft:'80px',marginTop:'70px'}} alt="Description" /></Link><h2 style={{marginLeft:'70px'}}>Greens</h2></div><div><Link to='/Fruit'><img style={{ marginLeft:'30px',marginTop:'240px'}}src={fruits1} alt="Description" /></Link><h2> Fruits</h2></div>
      <div><Link to='/Meat'><img src={meat3} style={{ marginLeft:'80px',marginTop:'70px', height:'200px'}} alt="Description" /></Link><h2>Meat</h2></div><div><Link to='/DiaryProducts'><img src={dp1} style={{ marginLeft:'80px',marginTop:'40px',height:'150px',width:'0px'}} alt="Description" /></Link><h2>DiaryProducts</h2></div> */}
     {/* </div> */}
   
      
      
    </div>
       {/* <Veg/>
       <Fruit/>
       <Green/> */}
       {/* <a href='Veg.js' target='_blank' rel='noreferrer' style={{textDecoration:'none'}}><img src={ve} alt='vegetables' style={{height:'200px'}}></img></a> 
       <a href='Meat.js' target='_blank' rel='noreferrer' style={{textDecoration:'none'}}><img src={meat} alt='vegetables' style={{height:'200px'}}></img></a> 
       <a href='Fruit.js' target='_blank' rel='noreferrer' style={{textDecoration:'none'}}><img src={fruits} alt='vegetables' style={{height:'200px'}}></img></a> 
       <a href='Green.js' target='_blank' rel='noreferrer' style={{textDecoration:'none'}}><img src={greenss} alt='vegetables' style={{height:'200px'}}></img></a> 
       <a href='DairyProduct.js' target='_blank' rel='noreferrer' style={{textDecoration:'none'}}><img src={dpp} alt='vegetables' style={{height:'200px'}}></img></a>  */}
     
{/*         
        <Container>
        <div class="sticky-top bg-primary  " style={{alignContent:'center',height:'100px'}}> <h1 className='vege' style={{marginTop:'30px'}}>Vegetables</h1></div>
         
         
        </Container> */}
    
    {/* </Container> */}
 
    </>
  )
}
