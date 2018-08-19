/**
* options about users
* @auther: zgwang
* @date: 2018.06.24
*/

var mongoose = require('./mongodb');
var Schema = mongoose.Schema;
// database schema
var userSchema = new Schema({
	phone: {
		type: String,
		required: true,
		unique: true
	},
	type: {
		type: String,
		required: false
	}
});

var userInfoModel = mongoose.model('userinfos', userSchema);
var UserInfo = function(){};
var userInfoInstance = null;

// create user
UserInfo.prototype.createUser = function(obj, callback){

	userInfoInstance = new userInfoModel(obj);
	userInfoInstance.save(callback);
};
// read user
UserInfo.prototype.readUser = function(phone, callback){
	userInfoModel.findOne({phone: phone}, callback);
};
// update user
UserInfo.prototype.updateUser = function(obj, callback){
	userInfoModel.findOneAndUpdate({phone: obj.phone}, obj, callback);
}
// delete user
UserInfo.prototype.deleteUser = function(phone, callback){
	userInfoModel.remove({phone: phone}, callback);
}

exports = module.exports = new UserInfo();
