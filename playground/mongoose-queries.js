const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59fa3b1b493af4e82b84766f11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById('59f8ef4aaeb2552c3facd0a4').then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by Id', user);
}, (e) => {
  console.log(e);
});
