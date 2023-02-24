import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import store from './store/store';
import Header from './layout/Header/Header';
import './App.css';
import Footer from './layout/Footer/Footer';
import Login from './components/Login/Login';
import Orders from './components/Order/Orders';
import Profile from './components/Profile/Profile';
import Checkout from './components/Checkout/Checkout';
import Signupform from './components/Signupform/Signupform';



function App() {
  return (
    <>
    <Provider store={store}> 
    <div className="App">
    
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    <Route path='/' element={[<Header/>, <Home/>, <Footer/> ]} />
      <Route path="/cart" element={[<Header/>, <Cart/>, <Footer/>]} />
      <Route path='/Login' element={<Login/>} ></Route>
      <Route path='/Signup' element={<Signupform/>} ></Route>
     
       <Route path='/Orders' element={[<Header/>, <Orders/>, <Footer/> ]} />
       <Route path='/Profile' element={<Profile/>} ></Route>
       <Route path='/Checkout/:id'  element={[<Header/>, <Checkout />, <Footer/> ]} />
       <Route path='/Cart/Checkout/:id'  element={[<Header/>, <Checkout />, <Footer/> ]} />
    </Routes>
   
      
    

    </BrowserRouter>

    
    </div>
    </Provider>

    </>
  );
}

export default App;
