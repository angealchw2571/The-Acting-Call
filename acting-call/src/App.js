import { useAtom } from "jotai";
import { Navigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router"
import { userSessionAtom } from "./components/Login";
import Main from './components/Main';
import Login from './components/Login';
import Error from "./components/Error"
import Navbar from './components/NavBar';
import Forums from './components/Forums';
import People from './components/People';
import Footer from './components/Footer';
import Profile from './components/Profile';
import ListGigs from './components/ListGigs';
import EditProfile from './components/EditProfile';
import CreateNewPost from './components/CreateNewPost'
import CreateNewUser from './components/CreateNewUser';
import CreateCastCall from './components/CreateNewGigs';
import IndividualGigs from './components/IndividualGigs';
import CreateNewThread from './components/CreateNewThread'
import CreateNewProfile from './components/CreateNewProfile';

function App() {
  const sessionData = useAtom(userSessionAtom)[0];

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
        <Route path="/gigs/new" element={<PrivateRoute><CreateCastCall /></PrivateRoute>} />
        <Route path="/forums/posts/:id/new" element={<PrivateRoute><CreateNewPost /></PrivateRoute>} />
        <Route path="//forums/threads/new" element={<PrivateRoute><CreateNewThread /></PrivateRoute>} />
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
