// // src/models/User.js

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: false, // Name is optional
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   subscribedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const User = mongoose.model('User', userSchema);
// module.exports = User;
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String },
//   googleId: { type: String, unique: true, sparse: true },
//   role: { type: String, default: 'buyer' } // or 'admin' for sellers
// });

// // Hash password before saving
// UserSchema.pre('save', function(next) {
//   const user = this;
//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) return next(err);
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// // Compare input password with stored hash
// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

// module.exports = mongoose.model('User', UserSchema);

//----------------------------------------

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
