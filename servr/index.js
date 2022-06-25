const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();

const UserModel = require("./Users")
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb+srv://root:root@cluster0.fsahq.mongodb.net/test")
mongoose.connect("mongodb+srv://mirza:mirza@cluster0.m1s8oai.mongodb.net/test")
app.get("/getUsers", (request, response) => {
    UserModel.find({}, (err, result) => {
        if (!err) {
            response.json(result)
        } else {
            response.json(err)
        }
    })
})



// app.get("/", (request, response) => {
//     response.send("getting data")
// })



app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save()

    res.json(user)
})

app.put("/updateUser", (req, res) => {

    const { id, name, age,username} = req.body

    try {
        UserModel.findById(id, (err, user) => {
            console.log(user)
            user.name = name
            user.age = age
            user.username = username
            // user.username = username
            user.save()
            res.send("User has been successfully updated in DB")
        })
    }
    catch (err) {
        res.send("Getting error from server")
    }
})


app.delete("/deleteUser/:id", async (req, res) => {
    const id = req.params.id

    await UserModel.findByIdAndRemove(id).exec()
    res.send("User has been successfully deleted from DB")
})

const PORT = "8000"
app.listen(PORT, () => {
    console.log(`Server is running perfectly on ${PORT}`)
})