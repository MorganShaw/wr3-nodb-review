Visual mockup <a href="https://www.figma.com/file/T96hsjPDiG18zqsOp6WzwU/Untitled?node-id=1%3A10">here.</a>

# WR3 Glorious To-Do List!

### MVP

Description: A todo list app that lets me keep track of stuff I need to do.

</br>
Features:
- User can add new todo item
- Uswer can view current todo items
- Uswer can delete todo item
- User can edit title of todo item
- User can complete todos

### ICEBOX
- Live chat dating feature
- Watch hulu on the site to procrastinate your todos
- Create next youtube/quibi/tiktok fusion that mines peoples personal information to sell on deep web

### SERVER
Dependencies:
- Express

Endpoints:
- app.get("/api/todos")
- app.post("/api/todos")
- app.delete("/api/todos/:id")
- app.put("/api/todos/complete/:id")
- app.put("/api/todos/edit/:id")

Structure:
- server/
    - index.js
    - controller.js
    - todos.json


### CLIENT
Dependencies
- axios

Structure:
- src
    - App.js
    - App.css
    - reset.css
    - components/
        - Header.js
        - Header.css
        - Form.js
        - Form.css
        - List.js
        - List.css
        - Task.js
        - Task.css