
---

```markdown
# ✅ CRUD Full-Stack de Usuários

Projeto completo que implementa operações de **CRUD** (Create, Read, Update, Delete) de usuários em **MySQL**, com:

- **Back-end**: Node.js + TypeScript + Express  
- **Front-end**: React + Vite + TypeScript + Bootstrap  
- **Comunicação**: Axios  
- **Teste de API**: Postman  
- **Deploy**: Netlify (front) / qualquer host (API)

---

## 📋 Visão Geral

1. **API (backend/)**  
   - Conecta ao MySQL e expõe endpoints REST  
   - Valida e processa dados antes de persistir  

2. **SPA (frontend/)**  
   - Tela de listagem de usuários  
   - Formulário para criar/editar  
   - Botões de excluir com confirmação  

3. **Fluxo de dados**  
   - Usuário interage na UI → React chama Axios → API processa → MySQL atualiza → React reflete mudanças  

---

## 🔧 Setup em 2 minutos

```bash
# 1. API
cd backend && npm install && npm run dev

# 2. SPA
cd frontend && npm install && npm run dev
