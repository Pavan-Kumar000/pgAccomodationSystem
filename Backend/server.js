const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/accommodation', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const AccommodationSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number
});

const Accommodation = mongoose.model('Accommodation', AccommodationSchema);

app.get('/accommodations', (req, res) => {
  Accommodation.find({}, (err, accommodations) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(accommodations);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
