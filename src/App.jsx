import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Login from './screens/Login.jsx';
import SignUp from './screens/SignUp.jsx';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App
