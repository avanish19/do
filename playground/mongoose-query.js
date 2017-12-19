const {ObjectId} =require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
 const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

   // var id ='5a34aed231268371773eaa17';

   // if(!ObjectId.isValid(id)){
   //    console.log('Id not valid');
   // }

  //  Todo.find({
  //  	_id:id

  //  }).then((todos)=> {
  //  	console.log('Todos',todos);
  //  });

  //  Todo.findOne({
  // _id:id
  //  }).then((Todos)=>{
  //  	console.log('Todo',Todos);
  //  });
   // Todo.findById(id).then((Todos)=>{
   //    if(!Todos){
   //       console.log("id not found");
   //    }
   //    console.log('Todo By Id',Todos);
   // }).catch((e)=> console.log(e));


   User.find({email:'avanish'}).then((User)=>{
      if(!User){
        return console.log('Email not found');
      }
      console.log(JSON.stringify(User,undefined,2));
   }).catch((e)=>console.log(e));


   User.findById('5a326279d8473f54efa84e9c').then((User)=>{
      if(!User){
         return console.log('Email not found');
      }
      console.log(JSON.stringify(User,undefined,2));
   }).catch((e)=>console.log(e));
