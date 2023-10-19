import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import User from '../models/User';


config();

// interface EnvVars {
//   NAME_DB_USER?: string;
//   NAME_DB?: string;
//   CLAVE_DB_USER?: string;
// }

// Verifica que las propiedades esperadas estén presentes en process.env
if (!process.env.NAME_DB_USER || !process.env.NAME_DB || !process.env.CLAVE_DB_USER) {
  throw new Error('Faltan variables de entorno necesarias');
}

console.log('NAME_DB_USER:', process.env.NAME_DB_USER);
console.log('NAME_DB:', process.env.NAME_DB);
console.log('CLAVE_DB_USER:', process.env.CLAVE_DB_USER);
export const sequelize = new Sequelize(process.env.NAME_DB_USER, process.env.NAME_DB, process.env.CLAVE_DB_USER, {
  host: 'localhost', // o la dirección de tu servidor PostgreSQL
  dialect: 'postgres',
  models: [User],
});

