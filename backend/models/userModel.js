import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const UserData = mongoose.model('User', userSchema);

export default UserData; // default export
