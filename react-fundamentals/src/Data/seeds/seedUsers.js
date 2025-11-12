// example snippet (can be used inside a function)
import User from "../models/user.model";
async function createUser() {
  const user = new User({
    name: "Alice",
    email: "alice@example.com",
    password: "secure123", // will be hashed by pre save hook
    age: 25
  });
  await user.save();
  console.log('User created:', user);
}

// IMPORTANT: insertMany() 
// does not call .pre('save') 
// hooks by default — meaning 
// passwords wouldn’t be hashed.

require('dotenv').config();
import connectDB from "../config/db";

const users = [
  { name: "Alice", email: "alice@example.com", password: "pwdAlice", age: 25 },
  { name: "Bob",   email: "bob@example.com",   password: "pwdBob",   age: 30 },
  { name: "Carol", email: "carol@example.com", password: "pwdCarol", age: 19 }
];

async function seed() {
  await connectDB(process.env.MONGO_URI);
  await User.deleteMany({}); // clear existing
  const created = await User.insertMany(users); // insertMany bypasses pre-save hooks! (see note)
  console.log('Inserted users:', created);
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});



// Better approach (seed with hashing):

const bcrypt = require('bcryptjs');
for (const u of users) {
  const salt = await bcrypt.genSalt(10);
  u.password = await bcrypt.hash(u.password, salt);
}
await User.insertMany(users);
