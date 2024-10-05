import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'pg',  // Utiliser 'pg' pour PostgreSQL
  connections: {
    pg: {  // Configuration pour PostgreSQL
      client: 'pg',
      connection: {
        host: '127.0.0.1',  // Adresse IP de la base de données
        port: 5432,          // Port par défaut de PostgreSQL
        user: 'shk',        // Utilisateur PostgreSQL
        password: '123', // Mot de passe de l'utilisateur
        database: 'lachataloc',  // Nom de la base de données
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
