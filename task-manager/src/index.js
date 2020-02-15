const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

const bcrypt = require('bcrypt');

 (async () => {
    const password = 'Test1234';
    const hashedPassword = await bcrypt.hash(password, 8);

    console.log(hashedPassword);

    const isMatch = await bcrypt.compare('Test1234', hashedPassword);
    console.log(isMatch);
})();