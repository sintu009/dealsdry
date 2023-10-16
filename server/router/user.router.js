const express = require('express');
const { userGetController, userPostController, userUpdateController, userDeleteController } = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.get('/users', userGetController);

userRouter.post('/', userPostController);

userRouter.post('/update', userUpdateController);

userRouter.post('/delete', userDeleteController)

module.exports = userRouter;