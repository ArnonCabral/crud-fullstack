import express from 'express';
import cors from 'cors';
import { db } from './database'; // ou ./database/index
import usuarioRoutes from './routes/usuario.routes';




const app = express();

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoutes);

export default app;
