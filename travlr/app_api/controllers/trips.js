const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
  try {
    const q = await Model.find({}).exec();
    if (!q || q.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }
    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// GET: /trips/:tripCode - lists a single trip
const tripsFindByCode = async (req, res) => {
  try {
    const q = await Model.find({ code: req.params.tripCode }).exec();
    if (!q || q.length === 0) {
      return res.status(404).json({ message: `Trip ${req.params.tripCode} not found` });
    }
    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { tripsList, tripsFindByCode };
