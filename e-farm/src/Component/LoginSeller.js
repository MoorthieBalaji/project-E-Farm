import React from 'react'
//import '../Component/Home.css'
//import img1 from '../Public/img1.jpg'
//import { Button } from 'bootstrap';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import { SellerHome } from './SellerHome';
export default function LoginSeller () {
  return(
    <>
    <div class="Parent" style={{backgroundImage:'url("img1.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
   <h1 style={{padding:'50px'}}>Welcome Seller</h1>
   <div className='text-center'>
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Form style={{backgroundColor:'transparent',border:'3px solid orange',borderRadius:'20px',boxShadow:'4px 4px 4px 4px lightsalmon',height:'15rem',color:'darkblue',marginTop:'20px'}}>
              <Form.Group controlId="formUsername" className='mb-3'>
                <Form.Label>Sellername</Form.Label>
                <Form.Control
                  type="text" className='w-50'style={{margin:'auto'}}
                  placeholder="Enter your username"
                  name="username" required
                 // value={credentials.username}
                  //onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className='mb-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                 className='w-50'
                  type="password"
                  placeholder="Enter your password"
                  name="password"style={{margin:'auto'}}
                  required
                 // value={credentials.password}
                  //onChange={handleInputChange}
                />
              </Form.Group>
              <div class="text-center">
             <Link to='/SellerHome'><button  type="button" class="btn btn-success">Login</button></Link>
             <Link to='/SellerSignUp'><button  type="button" class="btn btn-success"style={{marginLeft:'5px'}}>SignUp</button></Link>
                </div>
            </Form>
          </div>
        </div>
      </div>
  </div>
  </div>
    </>
  )  
};



