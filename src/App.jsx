import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Sidebar } from './components/Sidebar';
import { Profile } from './pages/profile';
import { Login } from './pages/login';
import { TOKEN } from './constants';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  // Check if the token is present in local storage
  const token = localStorage.getItem(TOKEN);

  // If no token and not already on login page, redirect to login
  if (!token && !isLoginPage) {
    return <Navigate to="/login" replace />;
  }

  // If there is a token and on login page, redirect to profile
  if (token && isLoginPage) {
    return <Navigate to="/profile" replace />;
  }

  useEffect(() => {}, [token])

  return (
    <>
      {!isLoginPage && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      
      <Routes>
        <Route path="/" element={token ? <Profile /> : <Navigate to="/login" replace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
