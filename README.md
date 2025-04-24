# 🚀 CRUD Usuários – Projeto Fullstack

Este projeto é uma aplicação completa de **CRUD (Create, Read, Update, Delete)** de usuários, desenvolvida com foco em **performance**, **boas práticas**, **acessibilidade** e **design responsivo**.  
Ele foi dividido em **backend** e **frontend**, e utiliza as seguintes tecnologias:

## 🧰 Tecnologias e Ferramentas

| Camada     | Tecnologias                                                                                                                                      |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Backend    | Node.js, Express, TypeScript, MySQL, CORS, dotenv                                                                                                |
| Frontend   | React, TypeScript, Vite, Bootstrap, Axios, React Router Dom                                                                                      |
| Testes API | Postman                                                                                                                                          |
| Deploy     | Netlify (frontend)                                                                                                                               |

---

## 🌐 Demonstração ao vivo

- 🔗 **Frontend (Netlify):**  
  https://crudfull.netlify.app  
- 🔗 **Repositório GitHub:**  
  https://github.com/ArnonCabral/crud-usuarios-node-react  

---

## 📂 Estrutura do Projeto

crud-usuarios-node-react/ 
   ├── backend/ # API REST em Node.js + TypeScript 
   │ ├── src/ 
   │ │ ├── controllers/ # Lógica de rotas (list, create, update, delete) 
   │ │ ├── database.ts # Conexão MySQL via mysql2 
   │ │ ├── models/ # Tipagens e interfaces 
   │ │ └── server.ts # Configuração do Express + rotas 
   │ ├── .env # Variáveis de ambiente (DB_HOST, DB_USER, …) 
   │ ├── package.json 
   │ └── tsconfig.json 
   │ ├── frontend/ # SPA React + TypeScript + Vite + Bootstrap 
   │ ├── src/ 
   │ │ ├── api/ # Cliente Axios configurado 
   │ │ ├── pages/ # UsersPage (lista) e UserFormPage (formulário) 
   │ │ ├── App.tsx # Rotas e layout global 
   │ │ └── main.tsx # Ponto de entrada 
   │ ├── public/ 
   │ ├── index.html # HTML base (importa Poppins, Bootstrap) 
   │ ├── package.json 
   │ └── vite.config.ts 
   │ └── README.md # Este arquivo



---

## 📋 Funcionalidades Principais

- ✅ **Listar usuários** com nome, e-mail e idade  
- ✅ **Criar usuário** via formulário  
- ✅ **Editar usuário** reutilizando o mesmo formulário  
- ✅ **Excluir usuário** com confirmação  
- ✅ **Sincronização em tempo real**: todas as operações alteram o banco de dados MySQL imediatamente  
- ✅ **Design responsivo** com Bootstrap, paleta roxa/branca e fonte Poppins  
- ✅ **Rotas**:  
  - `/` → lista  
  - `/user` → criação  
  - `/user/:id` → edição  

---

## 🗂️ Como executar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/ArnonCabral/crud-usuarios-node-react.git
cd crud-usuarios-node-react
cd backend
npm install
# Crie um arquivo `.env` na raiz do backend com suas credenciais MySQL:
#   DB_HOST=localhost
#   DB_USER=root
#   DB_PASSWORD=minha_senha
#   DB_NAME=crud_usuarios
#   DB_PORT=3306
npm run dev
cd ../frontend
npm install
npm run dev


🛠️ Testes de API com Postman
Importe a collection Postman:
postman_collection.json (disponível na raiz).

Execute as requisições:

GET → http://localhost:3000/usuarios
POST → http://localhost:3000/usuarios
PUT → http://localhost:3000/usuarios/{id}
DELETE → http://localhost:3000/usuarios/{id}


📦 Deploy no Netlify
Conecte seu repositório no painel do Netlify.

Em Build Settings:

Base directory: frontend

Build command: npm run build

Publish directory: dist

Clique em Deploy site.


🔖 Tecnologias Utilizadas
Backend

Node.js & Express

TypeScript

MySQL (mysql2)

dotenv (variáveis de ambiente)

CORS

Frontend

React + React Router Dom

TypeScript

Vite

Bootstrap 5

Axios

Ferramentas

Postman (testes de API)

Git & GitHub (controle de versão)

Netlify (deploy estático)

Desenvolvido por Arnon Cabral Nunes


