import { Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import Register from './Pages/Register';


function App(){
  return (

    <> 
    <Navbar />

    <Routes>
      <Route path="/" element={< Login />}></Route>
      <Route path="/register" element={< Register />}></Route>
      <Route path="/navbar" element={< Navbar />}></Route>
      </Routes>
      
    </>
    
  )
}


export default App;