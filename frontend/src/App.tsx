import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import UserFormPage from './pages/UserFormPage';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar bg-purple text-white py-2 mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand text-white fw-bold">CRUD Usuários</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user" element={<UserFormPage />} />
        <Route path="/user/:id" element={<UserFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
