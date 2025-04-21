import { Request, Response, NextFunction } from 'express';
import { db } from '../database';


// listarUsuarios
export const listarUsuarios = (req: Request, res: Response, next: NextFunction): void => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar usuários' });
    res.status(200).json(results);
  });
};

// criarUsuario
export const criarUsuario = (req: Request, res: Response, next: NextFunction): void => {
  const { nome, email, senha, idade } = req.body;
  if (!nome || !email || !senha || !idade) {
    res.status(400).json({ erro: 'Preencha todos os campos!' });
  }

  db.query(
    'SELECT * FROM usuarios WHERE email = ?',
    [email],
    (err, results) => {
      if (err) return res.status(500).json({ erro: 'Erro ao verificar e-mail' });
      if ((results as any[]).length > 0) {
        return res.status(400).json({ erro: 'E-mail já cadastrado!' });
      }

      db.query(
        'INSERT INTO usuarios (nome, email, senha, idade) VALUES (?, ?, ?, ?)',
        [nome, email, senha, idade],
        (err) => {
          if (err) return res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
          res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
        }
      );
    }
  );
};

// atualizarUsuario

export const atualizarUsuario = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { nome, email, senha, idade } = req.body;

  db.query(
    'UPDATE usuarios SET nome = ?, email = ?, senha = ?, idade = ? WHERE id = ?',
    [nome, email, senha, idade, id],
    (err) => {
      if (err) {
        return res.status(500).json({ erro: 'Erro ao atualizar usuário' });
      }

      return res
        .status(200)
        .json({ mensagem: 'Usuário atualizado com sucesso!' });
    }
  );
};                      

export const deletarUsuario = (req: Request, res: Response): void => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ erro: 'ID do usuário é obrigatório!' });
  }

  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao deletar usuário' });
    }

    return res
      .status(200)
      .json({ mensagem: 'Usuário deletado com sucesso!' });
  });
};
  





