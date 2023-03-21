import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import SignUpPage from './components/SignUp';
import ForgotPasswordPage from './components/ForgotPassword';
import Home from './components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
   <React.StrictMode>
  <App />
  <Routes>
             
             <Route path='/signup' element={<SignUpPage/>}/>
                <Route path ='/home' element={<Home/>} />     
             <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
             
             
           </Routes>
</React.StrictMode>
</BrowserRouter>

);


