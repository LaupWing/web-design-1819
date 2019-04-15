const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes')

app
    .use(express.static("static"))
    .set('view engine', 'ejs')
    .set('views', 'view')
    .use(routes)


app.listen(PORT, ()=>console.log(`Server is listening to port ${PORT}`));