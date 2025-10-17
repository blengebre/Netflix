const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

const config = require('./config/config');
// Middleware
app.use(cors());
app.use(express.json());

const router = require('./routes/routes');

app.use('/api', router);


// MongoDB connection
mongoose.connect(config.mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
