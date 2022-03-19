const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const routes = require('./routes/index.route');
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));