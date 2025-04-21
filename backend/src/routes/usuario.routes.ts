import { listarUsuarios, criarUsuario, atualizarUsuario, deletarUsuario } from '../controllers/usuario.controller';
import { Router } from 'express';


const router = Router();

router.get('/', listarUsuarios);
router.post('/', criarUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', deletarUsuario);

export default router;
