const express = require('express')
const router = express.Router()
const userServices = require("./userservice")

router.get('/', (req, res) => {
    try {
        const result = userServices.getusers()

        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(404).send("User/Post not found")
        }

    }
    catch (err) {
        res.status(500).send("Internal Error")
    }

})

router.get('/:id', (req, res) => {
    try {
        const id = req.params.id
        const result = userServices.getUser(id)

        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(404).send("User/Post not found")
        }

    }
    catch (err) {
        res.status(500).send("Internal Error")
    }

})

module.exports = router