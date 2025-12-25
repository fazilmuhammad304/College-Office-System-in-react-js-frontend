import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login'; // Ensure this matches your Login.jsx file location

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root URL "/" specifically to "/login" or just render Login */}
        <Route path="/" element={<Login />} />

        {/* Optional: Add a Dashboard route for after successful login */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;