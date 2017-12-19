//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
// var obj=new ObjectID();
// console.log(obj);
// var user={name:'Avanish',age:25};
// var{name}=user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err){
return console.log('Unable to log to mongodb');
}
console.log('Connected to MangoDB server');
db.collection('Todos').insertOne({
name:'Nitesh s',
age:26,
completed:false
},(err,result)=>{
	if(err){
		return console.log('Unable to insert todo',err);

	}
	console.log(JSON.stringify(result.ops,undefined,2));
})
// db.collection('Todos').insertOne({
// 	name:'Avanish Mishra',
// 	age:23,
// 	location:'mumbai',
// 	completed:false
// },(err,result)=>{
// 	if(err){
// 		return console.log('Unable to insert');
// 	}
// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
// }
// )
db.close();
});