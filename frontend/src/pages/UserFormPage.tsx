import React, { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createUser, updateUser, User } from '../api/users';

export default function UserFormPage() {
  const { id } = useParams<{id:string}>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState<Omit<User,'id'>>({
    nome:'', email:'', senha:'', idade:0
  });

  // carrega dados para edição
  useEffect(() => {
    if (!isEdit) return;
    fetch(`http://localhost:3000/usuarios/${id}`)
      .then(r => r.json())
      .then((u:User) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id:_, ...rest } = u;
        setForm(rest);
      });
  }, [isEdit, id]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const action = isEdit
      ? updateUser(Number(id), form)
      : createUser(form);
    action.then(() => navigate('/'));
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="bg-white p-4 rounded shadow" style={{maxWidth:400, width:'100%'}}>
        <h2 className="text-center text-purple mb-4">{isEdit?'Editar':'Novo'} Usuário</h2>
        <form onSubmit={handleSubmit}>
          {['nome','email','senha','idade'].map((field,key) => (
            <div className="mb-3" key={key}>
              <label className="form-label text-purple fw-semibold">
                {field.charAt(0).toUpperCase()+field.slice(1)}:
              </label>
              <input
                type={field==='idade'?'number': field==='senha'? 'password':'text'}
                className="form-control"
                value={(form as never)[field]}
                onChange={e => {
                  const v = field==='idade'? Number(e.target.value) : e.target.value;
                  setForm({...form, [field]: v});
                }}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-purple w-100">
            {isEdit?'Salvar':'Criar'} Conta
          </button>
        </form>
        <button onClick={()=>navigate('/')} className="btn btn-link mt-2">Voltar</button>
      </div>
    </div>
  );
}
