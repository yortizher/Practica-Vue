import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, BOOLEAN } = DataTypes

export const User = db.define('data',{
id_user: {
    type: STRING
},
username:{ 
    type: STRING
},
email: { 
    type: STRING,
    unique: true
},
active: {
    type: BOOLEAN,
    defaultValue: true
}
})