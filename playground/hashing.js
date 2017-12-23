const {SHA256} = require('crypto-js');

var jwt = require('jsonwebtoken');
const bcrypt= require('bcryptjs');
 

 var password= '123!';

 bcrypt.genSalt(10,(err,salt)=>{
 	bcrypt.hash(password,(err,hash)=>{
 		console.log(hash);

 	});
 });
 bcrypt.compare(password,hash,(err,res)=>{
 	console.log(res);
 })


//**********************************************************************
// var data = {
// 	id: 10
// };

// var token = jwt.sign(data,'abc');
// console.log(token);
// var decoded = jwt.verify(token,'abc');
// console.log(decoded);
//*********************************************************************************
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUxMzc2MjkzNn0.mtbApwEa3MhksW4BpqmDEaEv59lux5POgiKHd2FIoL4

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message:${message}`);
// console.log(`Hash:${hash}`);

// var data ={
// 	id: 4
// };
// // to make security
// var token={
	
// 		data,
// 		//to avoid data changes we use +somesecret
// 		hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
	
// 	}
// 	//to verify hash and validate

// //	token.data.id=5;

// 	hash:SHA256(JSON.stringify(data) + 'somesecret').toString();

// 	var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// 	if(resultHash===token.hash){
// 		console.log('Data was not changed');
// 	} else{
// 		console.log('Data was changed.Do not trust!');
// 	}
	