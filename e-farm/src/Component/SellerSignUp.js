import React from 'react'
import { Form } from 'react-bootstrap';
export default function SellerSignUp() {
  return (
    <>
        <div class="Parent" style={{backgroundImage:'url("fasi.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
        <div className="row justify-content-center">
          <div className="col-md-5" style={{padding:'30px'}}>
            <Form style={{backgroundColor:'transparent',border:'5px solid lightBlue',borderRadius:'20px',boxShadow:'4px 4px 4px 4px LightGreen',height:'30rem',color:'black',marginTop:'50px'}}>
                <h2 style={{marginTop:'10px'}}>SignUp</h2>
            <Form.Group controlId="SellerName" className='mb-3' style={{margin:'10px'}}>
                <Form.Label style={{marginTop:'10px',fontSize:'medium',display:'flex',alignItems:'end'}}><h5>Farmername:</h5>
                <Form.Control
                  type="text" className='w-50'style={{marginTop:'10px',marginLeft:'17px',backgroundColor:'aquamarine'}}
                  placeholder="Enter your name"
                  name="username"
                />
                </Form.Label>
            </Form.Group>
            <Form.Group controlId="Dob" className='mb-3' style={{marginLeft:'10px'}}>
                <Form.Label style={{marginTop:'1px',fontSize:'medium',display:'flex',alignItems:'end'}}><h5>Date Of Birth:</h5>
                <Form.Control
                  type="date" className='w-50'style={{marginTop:'1px',marginLeft:'10px',backgroundColor:'aquamarine'}}
                  placeholder="Enter DOB"
                  name="username"
                /></Form.Label>
            </Form.Group>
            <Form.Group controlId="Dob" className='mb-3' style={{marginLeft:'10px'}}>
                <Form.Label style={{marginTop:'1px',fontSize:'medium',display:'flex',alignItems:'end'}}><h5>Gender:</h5>
                <Form.Control
                  type="radio" className='w-50'style={{marginTop:'1px',marginLeft:'82px',backgroundColor:'aquamarine'}}
                  placeholder="Enter DOB"
                  name="username"
                /></Form.Label>
                </Form.Group>
                <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{marginLeft:'40px'}}/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>

 <div class="form-check">
   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
   <label class="form-check-label" for="flexRadioDefault2">
     Female
   </label>
 </div>
             <Form.Group controlId="Dob" className='mb-3' style={{marginLeft:'10px'}}>
                 <Form.Label style={{marginTop:'1px',fontSize:'medium',display:'flex',alignItems:'end'}}><h5>Place:</h5>
                 <Form.Control
                   type="text" className='w-50'style={{marginTop:'1px',marginLeft:'82px',backgroundColor:'aquamarine'}}
                   placeholder="Enter place"
                   name="username"
                 /></Form.Label>
             </Form.Group>
             <Form.Group controlId="Dob" className='mb-3' style={{margin:'10px'}}>
                 <Form.Label style={{marginTop:'1px',fontSize:'medium',display:'flex',alignItems:'end'}}><h5>Phone No:</h5>
                 <Form.Control
                   type="text" className='w-50'style={{marginTop:'1px',marginLeft:'42px',backgroundColor:'aquamarine'}}
                   placeholder="Enter PhoneNo"
                   name="username"
                 /></Form.Label>
             </Form.Group>
             <Form.Group controlId="Dob" className='mb-3' style={{margin:'10px'}}>
                 <Form.Label style={{marginTop:'1px',fontSize:'medium',display:'flex',alignItems:'end'}}><h5>Password:</h5>
                 <Form.Control
                   type="password" className='w-50'style={{marginTop:'1px',marginLeft:'42px',backgroundColor:'aquamarine'}}
                   placeholder="Enter Password"
                   name="username"
                 /></Form.Label>
             </Form.Group>
             <div class="text-center">
                   <button type="button" class="btn btn-danger">create</button>
              </div>
             </Form>
             </div>
         </div>
     </div>
   </>
    );
  }
