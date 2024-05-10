import express from 'express';
import weatherRouter from './src/routes/weather';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(express.json());

// Routes
app.use('/api/weather', weatherRouter);

var server=app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server