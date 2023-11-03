const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service', // Reference to the Service model
    },
  ],
  // Other fields specific to sellers
});

module.exports = mongoose.model('Seller', SellerSchema);
