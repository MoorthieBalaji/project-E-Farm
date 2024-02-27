import React from 'react'
//import { Button } from 'react-bootstrap'
//import farmer from './Logo/farmer.png'
//import Shoppingcart from './Logo/Shoppingcart.png'
// import buy1 from './Logo/buy1.png'
//import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate=useNavigate();
  return (
   <>
   <div class="Parent" style={{backgroundImage:'url("img2.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
   <div className='text-center'style={{paddingTop:'220px'}}>
    <div className='container'>
  <button onClick={()=>navigate('LoginSeller')}>Seller</button>
  <button onClick={()=>navigate('LoginBuyer')}>Buyer</button>
    
    {/* <Button variant="success" style={{backgroundColor:'transparent', padding:'20px', border:'2px solid black'}}>Farmer</Button>
    <Button variant="success"style={{marginLeft:'15%', backgroundColor:'transparent', padding:'20px' , border:'2px solid black'}}>Buyer</Button> */}
    </div>
   </div>
    </div>
   </>
  )
}
