import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router"
import Main from './components/Main';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import CreateCastCall from './components/CreateNewGigs';
import ListGigs from './components/ListGigs';
import CreateNewUser from './components/CreateNewUser';
import People from './components/People';
import IndividualGigs from './components/IndividualGigs';
import Error from "./components/Error"
import { userSessionAtom } from "./components/Login";
import { useAtom } from "jotai";
import { Navigate } from "react-router-dom";
import CreateNewProfile from './components/CreateNewProfile';
import EditProfile from './components/EditProfile';
import Forums from './components/Forums';



function App() {

  const sessionData = useAtom(userSessionAtom)[0];
  // console.log("sessionData (app.js)", sessionData);

  const isAuthenticated = () => {
    if (sessionData.username === undefined) {
      return false
    } else return true
  }

  function PrivateRoute({ children }) {
    const auth = isAuthenticated();
    return auth ? children : <Navigate to="/error" />;
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/new" element={<CreateNewUser />} />
        <Route path="/profile" element={<PrivateRoute><Profile /> </PrivateRoute>} />
        <Route path="/profile/:username" element={<PrivateRoute><Profile action={"view"} /></PrivateRoute>} />
        <Route path="/profile/new" element={<PrivateRoute><CreateNewProfile /></PrivateRoute>} />
        <Route path="/profile/:id/edit" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
        <Route path="/gigs/new" element={<CreateCastCall />} />
        <Route path="/gigs" element={<ListGigs />} />
        <Route path="/people" element={<People />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/error" element={<Error />} />
        <Route path="/gigs/list/:id" element={<IndividualGigs />} />
      </Routes>
      <Footer className="flex-col" />
    </BrowserRouter>
  )
}

export default App;
