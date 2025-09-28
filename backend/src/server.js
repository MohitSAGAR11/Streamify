import express from "express"
import "dotenv/config"
// dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get("/api/auth/signup", (req, res) => {
  res.send("SignUp route")
})

app.get("/api/auth/logout", (req, res) => {
  res.send("LogOut route")
})

app.get("/api/auth/login", (req, res) => {
  res.send("Login route")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
