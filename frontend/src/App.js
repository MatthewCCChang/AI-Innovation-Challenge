import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element = {<SignIn />} />
        <Route element = {<SignUp />} />
        <Route element = {<AuthDetails />} />
        <Route path='/Home' element={<Home  />} />
      </Routes>
      </BrowserRouter>
      
  );
}
/*

function App() {
    return (<BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      </BrowserRouter>
      );
}
  


*/
export default App;
