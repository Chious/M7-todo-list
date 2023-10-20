import { AuthProvider } from 'contexts/AuthContext';
import './App.scss';
import { TodoPage, LoginPage, SignUpPage, HomePage } from './pages';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="todos" element={<TodoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
