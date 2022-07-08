import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/product", productRoutes)   
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})