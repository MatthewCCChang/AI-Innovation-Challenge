import logo from './logo.svg';
import './App.css';
import SignIn from '../../firebase-auth/src/components/auth/SignIn';
import { Home, About, Contact } from './pages';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
