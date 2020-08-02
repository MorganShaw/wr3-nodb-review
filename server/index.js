const express = require('express');
const app = express();
const ctrl = require('./controller');
const port = 4545;

app.use(express.json());

app.get("/api/todos", ctrl.getTodos);
app.post("/api/todos", ctrl.addTodo);
app.delete("/api/todos/:id", ctrl.deleteTodo);
app.put("/api/todos/complete/:id", ctrl.completeTodo);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
