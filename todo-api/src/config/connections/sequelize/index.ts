import { Sequelize } from "sequelize"
import config from './config.json'
const conf: any = config as any
export const connect = new Sequelize(
    {
      database: conf[process.env.NODE_ENV || "development"].database as string,
      username: conf[process.env.NODE_ENV || "development"].username || 'root',
      password: conf[process.env.NODE_ENV || "development"].password || 'root',
      host: conf[process.env.NODE_ENV || "development"].host || 'localhost',
      dialect: conf[process.env.NODE_ENV || "development"].dialect || 'mysql',
      port: conf[process.env.NODE_ENV || "development"].port || 3306
    }
  )