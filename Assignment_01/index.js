const express = require("express")
const app = express()
const port = 3001


const userRoute = require('./user/userroute')
const commentRoute = require('./comment/commentroute')


app.use(express.json())
app.use('/user', userRoute)
app.use('/post', commentRoute)

app.listen(port, () => {
    console.log("App is running on port number " + port);
})