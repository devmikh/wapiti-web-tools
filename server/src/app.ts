import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import router from './routes';

dotenv.config()

const app = express()

const corsOptions = {
    origin: process.env.CLIENT_URL
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
