import bcrypt from 'bcrypt';
// const password = '$2a$10$oFKQKs5uFp5vE5dQzzqpbubO1QINt5Z9XvqVS/zvMddpu5LrObY/e';
const password = await bcrypt.hash('jashu@123', 10);
console.log(password);
