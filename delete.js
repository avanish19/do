const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err){
return console.log('Unable to log to mongodb');
}
console.log('Connected to MangoDB server');
db.collection('Todos').deleteMany({name:'prasad'}&&{name:'Avanish'}).then((result)=>{
	console.log(result);
});
// db.collection('Todos').deleteOne({age:23}).then((result)=>{
// 	console.log(result);
// });
});