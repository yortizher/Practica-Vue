import { v4 } from 'uuid'
import dotenv from 'dotenv/config'

export const uuid = v4()


export const database = process.env.DATABASE
export const username = process.env.USERNAME
export const password = process.env.PASSWORD
export const host = process.env.host
export const dialect = process.env.dialect