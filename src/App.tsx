import { Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import Register from './Pages/Register';
import ForgetPassword from './Pages/ForgetPassword';
import NewUser from './Pages/NewUser';
import {initializeApp } from 'firebase/app';
import { config } from './config/config';


export const Firebase = initializeApp (config.firebaseConfig);


function App(){
  return (

    <> 
    <Navbar />

    <Routes>
      <Route path="/" element={< Login />}></Route>
      <Route path="/register" element={< Register />}></Route>
      <Route path="/forgetpassword" element={< ForgetPassword />}></Route>
      <Route path="/newuser" element={< NewUser />}></Route>
      <Route path="/navbar" element={< Navbar />}></Route>
      </Routes>
      
    </>
    
  )
}


export default App;