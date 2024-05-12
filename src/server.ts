import app from './app';
import config from './config/config';

// Démarrage du serveur
const port = config.port;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
  console.log(`http://localhost:${port}/api`);
});

// Gestion des promesses non gérées
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application shutdown logic
});

// Gestion des exceptions non attrapées
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception thrown:', error);
  // Application shutdown logic
});