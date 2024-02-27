
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSeller from './Component/LoginSeller';
import  SellerSignUp  from './Component/SellerSignUp';
import { LoginBuyer } from './Component/LoginBuyer';
import { BuyerSignUp } from './Component/BuyerSignUp';
import { SellerHome } from './Component/SellerHome';
import {Routes,Route} from 'react-router-dom'
import { Home } from './Component/Home';
import Veg from './Component/Veg';
import Meat from './Component/Meat';
import Fruit from './Component/Fruit';
import Green from './Component/Green';
import DiaryProducts from './Component/DiaryProducts';
import { BuyerHome } from './Component/BuyerHome';


function App() {
  return (
    <div className="App">
         <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Loginseller' element={<LoginSeller/>}></Route>
              {/* <Route path='/SellerHome' element={<SellerHome/>}></Route> */}
              <Route path='/SellerSignUp' element={<SellerSignUp/>}></Route>
          <Route path='/LoginBuyer' element={<LoginBuyer/>}></Route>
               <Route path='/BuyerHome' element={<BuyerHome/>}></Route>
          <Route path='/BuyerSignUp' element={<BuyerSignUp/>}></Route>
               <Route path='/SellerHome' element={<SellerHome/>}></Route>
          <Route path='/SellerHome' element={<SellerHome/>}></Route>
              <Route path='/Veg' element={<Veg/>}></Route>
             <Route path='/Meat' element={<Meat/>}></Route>
              <Route path='/Fruit' element={<Fruit/>}></Route>
              <Route path='/Green' element={<Green/>}></Route>
              <Route path='/DiaryProducts' element={<DiaryProducts/>}>
          </Route>
         </Routes>
    </div>
  );
}

export default App;
