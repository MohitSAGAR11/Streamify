import express from "express"

const router = express.Router()

router.get("/signup" , (req,res) => {
    res.send("sp")
})

router.get("/login" , (req,res) => {
    res.send("li")
})

router.get("/logout" , (req,res) => {
    res.send("lo")
})

export default router;