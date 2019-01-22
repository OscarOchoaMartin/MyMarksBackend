'use strict';
import Sequelize from 'sequelize';
import allModels from './models/allModels';

const url = process.env.CLEARDB_DATABASE_URL || "mysql://root:root@localhost:8889/hackernews";

const sequelize = new Sequelize(url);

allModels(sequelize, Sequelize);

sequelize.sync();

export default sequelize;