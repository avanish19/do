const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) =>{
// 	console.log(result);
// });

Todo.findOneAndRemove({_id:'5a378c1d67bfbc52c359a692'}).then((todo)=>{
	console.log(todo);
});

Todo.findByIdAndRemove('5a378c1d67bfbc52c359a692').then((todo) =>{
	console.log(todo);
});
