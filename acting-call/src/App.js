import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router"
import Main from './components/Main';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import CreateCastCall from './components/CreateCastCall';
import ListGigs from './components/ListGigs';
import CreateNewUser from './components/CreateNewUser';
import People from './components/People';
import IndividualGigs from './components/IndividualGigs';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes> 
        <Route exact path="/" element={<Main/>} />            
      </Routes>
      <Routes> 
        <Route path="/login" element={<Login/>} />            
      </Routes>
      <Routes> 
        <Route path="/user/new" element={<CreateNewUser/>} />            
      </Routes>
      <Routes> 
        <Route path="/profile" element={<Profile/>} />            
      </Routes>
      <Routes> 
        <Route path="/gigs/new" element={<CreateCastCall/>} />            
      </Routes>
      <Routes> 
        <Route path="/gigs" element={<ListGigs/>} />            
      </Routes>
      <Routes> 
        <Route path="/people" element={<People/>} />            
      </Routes>
      <Routes> 
        <Route path="/gigs/list/:id" element={<IndividualGigs/>} />            
      </Routes>
      <Footer className="flex-col"/>
    </BrowserRouter>
  )
}

export default App;
