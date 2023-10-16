const userModel = require("../modal/collections/user.collection");


const userGetController = async (req, res) => {
    const data = await userModel.find();
    const datalLength = data.length;
    if (datalLength === 0) {
        res.status(400).send({ msg: "No data present in db" });
        return;
    } else if (datalLength > 1) {
        res.status(400).send({ msg: "Datas fetched from db", data_length: datalLength, data: data });
        return;
    }
    res.status(201).send({ msg: "Data fetched from db", data: data });
}


const userPostController = async (req, res) => {
    const user = req.body;
    console.log(user);
    // validate(user)
    try {
        const data = await userModel.findOne({ f_Email: user.f_Email }).exec();
        if (data) {
            console.log("hello")
            res.status(400).send({ msg: "already you have account" });
        } else {
            const userDB = await userModel.create(user);
            res.status(201).send({ msg: "data stored in db", data: userDB });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "something went wrong please try again later" })
    }
}

const userUpdateController = async (req, res) => {
    const user = req.body;
    const email = user.f_Email;
    console.log(email);
    // const ifUsernamePresent = userData.find(elem => elem.username === username);
    const data = await userModel.findOne({ f_Email: email });
    console.log(data);
    if (!data) {
        res.status(400).send({ msg: "data not present in db" });
        return;
    }
    await userModel.updateMany({ f_Designation: "developer" }, { ...user });
    await data.save();
    res.send({ msg: "updated" });
}

const userDeleteController = async (req, res) => {
    const id = req.body.userId;
    console.log(id);
    const data = await userModel.findOne({ _id: id });
    if (!data) {
        res.status(400).send({ msg: "data not present in db" });
        return;
    }
    await userModel.deleteOne({ _id: id })
    res.send({ msg: "data deleted" })

}
module.exports = {
    userGetController,
    userPostController,
    userUpdateController,
    userDeleteController
}