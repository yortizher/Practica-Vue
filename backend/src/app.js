import express from "express";
import morgan from "morgan";
import cors from 'cors'
import { appRouter } from './routes/routes.js'

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(appRouter)


export default app;