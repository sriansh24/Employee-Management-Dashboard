import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EmdLogin from "./pages/authpage/EmdLogin";
import EmdDashboard from "./pages/dashboardpage/Dashboard";
import ProtectedRoute from "./routes/protectedroute/ProtectedRoute";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/emd-login" />} />
        <Route path="/emd-login" element={<EmdLogin />} />
        <Route path="/emd-dashboard" element={
          <ProtectedRoute>
            <EmdDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
