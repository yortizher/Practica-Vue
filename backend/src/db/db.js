import  Sequelize  from "sequelize"
import { database, username, password, host, dialect} from '../helpers/helper.js'

export const db = new Sequelize(database, username, password, {
    host,
    dialect,
  })