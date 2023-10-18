import { Sequelize } from 'sequelize-typescript';



const sequelize = new Sequelize({
  database: 'nombre_de_tu_db',
  username: 'tu_usuario',
  password: 'tu_contraseña',
  host: 'localhost', // o la dirección de tu servidor PostgreSQL
  dialect: 'postgres',
  models: [__dirname + '/models'], // Directorio donde se encuentran tus modelos
});

export default sequelize;
