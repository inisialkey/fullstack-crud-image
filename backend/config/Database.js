import { Sequelize } from "sequelize";

const db = new Sequelize("learning_crud_fullstack_image", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
