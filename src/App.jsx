import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route loads the Login page */}
        <Route path="/" element={<Login />} />

        {/* Route for the Admin Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;