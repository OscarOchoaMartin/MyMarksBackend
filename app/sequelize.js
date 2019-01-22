'use strict';
import Sequelize from 'sequelize';
import allModels from './models/allModels';

const url = process.env.CLEARDB_DATABASE_URL || "mysql://root:root@localhost/mymarks";

const sequelize = new Sequelize(url);

allModels(sequelize, Sequelize);

//sequelize.sync();
sequelize.sync({force: true});

export default sequelize;