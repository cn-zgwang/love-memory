/**
* mongodb database for love memory
* @Auther: cn.zgwang
* @Date: 2018.06.23
*/
var mongoose = require('mongoose');
var options = {
	db: {
		native_parser: true
	},
	server: {
		poolSize: 10
	},
	replset: {
		rs_name: 'myReplicaSetName'
	}
}

mongoose.connect('mongodb://127.0.0.1/love-memory', options);

var db = mongoose.connection;
db.on('error', function(error){
	console.log(error);
});
db.once('open', function(err, res){
	if(err){
		console.log(err);
	}else{
		console.log("The mongodb database about love memory connected.");
	}
});

exports = module.exports = mongoose;