import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Login from './pages/LoginPages';
import RegisterPages from './pages/RegisterPages';

function App() {

  return (
    <Router>
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
    </Router>
  );
}

export default App
