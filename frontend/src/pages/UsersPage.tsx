import React, { useEffect, useState } from 'react';
import { listUsers, deleteUser, User } from '../api/users';
import { Link } from 'react-router-dom';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    listUsers().then(r => setUsers(r.data));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-purple fw-bold">CRUD Usuários</h1>
      <Link to="/user" className="btn btn-purple mb-3">+ Novo Usuário</Link>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Nome</th><th>E‑mail</th><th>Idade</th><th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.nome}</td>
              <td>{u.email}</td>
              <td>{u.idade}</td>
              <td>
                <Link to={`/user/${u.id}`} className="btn btn-sm btn-warning me-1">Editar</Link>
                <button onClick={() => {
                  deleteUser(u.id).then(() => setUsers(users.filter(x => x.id !== u.id)));
                }} className="btn btn-sm btn-danger">Apagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
