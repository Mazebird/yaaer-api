import dotenv from 'dotenv';
import express from 'express';
import turnOrderRoutes from './routes/turnOrderRoutes';
import errorMiddleware from './middlewares/errorMiddleware';

// Charger les variables d'environnement
dotenv.config();

// Création de l'application Express
const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Lien vers les routes turnOrder
app.use('/api', turnOrderRoutes);

// Middleware pour la gestion des erreurs
app.use(errorMiddleware);

export default app;
