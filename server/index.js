const express = require('express');
const app = express();
const ctrl = require('./controller')
app.use(express.json());

const port = 4545;

app.get("/api/todos", ctrl.getTodos);
// app.post("/api/todos", ctrl.addTodos);
// app.get("/api/todos", ctrl.getTodos);
// app.get("/api/todos", ctrl.getTodos);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
