const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema describes what every individual record is going to look like.

const userSchema = new Schema({
  googleId: String
});

//create new collection of users-will not overwrite existing collections.
mongoose.model('users', userSchema);
