import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { Register } from './pages/Register/Register';
import { AuthLayout } from './layouts/AuthLayout';
import { ProtectedRoute } from './layouts/ProtectedRoute';
// import { Projects } from './pages/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route path="register" element={<Register />} />
              <Route index element={<Register />} />
            </Route>
            <Route path="/projects" element={<ProtectedRoute />}>
              <Route index element={<Register />} />
            </Route>
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
