import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, BOOLEAN,UUID } = DataTypes

export const User = db.define('data',{
id: {
    type: UUID,
    primaryKey: true
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