const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const articleRouter = require('./route/articleRoute.js');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/news', {
  // Remove the deprecated options
  // useNewUrlParser: true, // This option is deprecated and no longer needed
  // useUnifiedTopology: true // This option is deprecated and no longer needed
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
app.use('/api/articles', articleRouter);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));