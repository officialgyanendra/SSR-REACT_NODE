const express = require('express')
const cors = require('cors');

const checkHeaderKey = require('./middleware');
const { getListController, getListItemController } = require('./controllers/apiController');

const app = express()
app.use(cors());
app.get('/api', checkHeaderKey, getListController)
app.get('/api/details/:id', checkHeaderKey, getListItemController)

app.listen(3001, () => { console.log("Server started on port 3001") })