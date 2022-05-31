import { Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import PasswordReset from './Pages/PasswordReset';
import ForgetPassword from './Pages/ForgetPassword'

import NewUser from './Pages/NewUser';
import Dashboard from './Pages/Dashboard';









function App(){
  
  return (

    <> 
    <Navbar />

    <Routes>
      <Route path="/" element={< Login />}></Route>
      <Route path="/passwordreset" element={< PasswordReset />}></Route>
      <Route path="/forgetpassword" element={< ForgetPassword />}></Route>

      <Route path="/dashboard" element={< Dashboard />}></Route>
      
      <Route path="/newuser" element={< NewUser />}></Route>
      <Route path="/navbar" element={< Navbar />}></Route>
      </Routes>
      
    </>
    
  )
}


export default App;