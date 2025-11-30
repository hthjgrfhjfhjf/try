import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  database: 'db',
  username: 'postgres',
  password: '2403',
  logging: false
});

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
}

export default sequelize;