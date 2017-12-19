const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err){
return console.log('Unable to log to mongodb');
}
console.log('Connected to MangoDB server');
db.collection('Todos').find({location:'mumbai'}).toArray().then((docs)=>{
	console.log('Todos');
	console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
	console.log('Unable to fetch todos',err);
}
);
//db.close();
});