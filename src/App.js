import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router"
import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" component={Main} />            
      </Routes>
    </BrowserRouter>
  )
}

export default App;
