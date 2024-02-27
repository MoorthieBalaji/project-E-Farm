import React from 'react'
import {Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export const LoginBuyer = () => {
  return (
    <>
    <div class="Parent" style={{backgroundImage:'url("buycaart.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
   <h4 style={{padding:'50px',fontFamily:'cursive',color:'',display:'flex',justifyContent:'center',background:'center',backgroundColor:'lightgreen',width:'400px',height:'2px',marginLeft:'570px',border:'solid',alignItems:'center'}}>Welcome Customer</h4>
   <div className='text-center'>
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-md-5" style={{padding:'30px'}}>
            <Form style={{backgroundColor:'transparent',border:'5px solid brown',borderRadius:'20px',boxShadow:'4px 4px 4px 4px brown',height:'25rem',color:'black',marginTop:'50px'}}>
              <Form.Group controlId="formUsername" className='mb-3'>
                <Form.Label style={{marginTop:'50px',fontSize:'medium'}}><h4>Username</h4></Form.Label>
                <Form.Control
                  type="text" className='w-50'style={{marginTop:'20px',marginLeft:'120px'}}
                  placeholder="Enter your username"
                  name="username"
                  // value={credentials.username}
                  // onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className='mb-4'>
                <Form.Label><h4>Password</h4></Form.Label>
                <Form.Control
                 className='w-50'
                  type="password"
                  placeholder="Enter your password"
                  name="password"style={{margin:'auto'}}
                  // value={credentials.password}
                  // onChange={handleInputChange}
                />
              </Form.Group>
              <div class="text-center">
                 <Link to='/BuyerHome'><button type="button" class="btn btn-success">Login</button></Link> 
                  <button type="button" className="btn btn-success " style={{marginLeft:'5px'}}>SignUp</button>
                </div>
            </Form>
          </div>
        </div>
      </div>
  </div>
  </div>
    </>
  )
}
