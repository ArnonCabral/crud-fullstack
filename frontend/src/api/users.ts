import axios from 'axios';

export interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
  idade: number;
}

const api = axios.create({ baseURL: 'http://localhost:3000' });

export const listUsers   = () => api.get<User[]>('/usuarios');
export const createUser  = (user: Omit<User,'id'>) => api.post('/usuarios', user);
export const updateUser  = (id: number, user: Omit<User,'id'>) => api.put(`/usuarios/${id}`, user);
export const deleteUser  = (id: number) => api.delete(`/usuarios/${id}`);
