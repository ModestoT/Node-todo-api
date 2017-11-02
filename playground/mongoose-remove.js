const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '59fa62acefd673efb3c43558'}).then((todo) => {
  
});

Todo.findByIdAndRemove('59fa62acefd673efb3c43558').then((todo) => {
  console.log(todo);
});
