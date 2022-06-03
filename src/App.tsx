import { Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import ForgetPassword from './Pages/ForgetPassword'
import NewUser from './Pages/NewUser';
import Dashboard from './Pages/Dashboard';
import ResetPassword from './ResetPassword';



function App(){

  


return (

    <> 
    <Navbar />

    <Routes>
      <Route path="/" element={< Login />}></Route>
      
      <Route path="/forgetpassword" element={< ForgetPassword />}></Route>

      <Route path="/dashboard" element={< Dashboard />}></Route>
      <Route path="/resetpassword" element={< ResetPassword />}></Route>
      
      <Route path="/newuser" element={< NewUser />}></Route>
      <Route path="/navbar" element={< Navbar />}></Route>
    </Routes>



      
    </>
    
  )
}


export default App;