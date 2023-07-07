import { Sequelize } from 'sequelize';
import dishModel from './dish.js'
import cartModel from './cart.js'
import commandModel from './command.js'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.dish = dishModel(sequelize, Sequelize);
db.cart = cartModel(sequelize, Sequelize);
db.command = commandModel(sequelize, Sequelize);

db.dish.hasMany(db.cart, {foreignKey: 'dish_id', onDelete: 'CASCADE' });
db.cart.belongsTo(db.dish, {foreignKey: 'dish_id' })

export default db;