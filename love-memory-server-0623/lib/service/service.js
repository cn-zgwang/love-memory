/**
* service about flowers
* @Auther: zgwang
* @Date:2016.11.6
*/

var flowerInfo = require("./service_data/flowerInfo");
var userInfo = require("./service_data/userInfo");

var Service = function(){};

Service.prototype.createWish = function(obj, callback) {
	flowerInfo.createWish(obj, callback);
};

Service.prototype.readWishByPhoneAndShop = function(phone, flowerShop, callback){
	flowerInfo.readWishByPhoneAndShop(phone, flowerShop, callback);
}
Service.prototype.readWishBySetPhoneAndShop = function(setPhone, phone, flowerShop, callback){
	flowerInfo.readWishBySetPhoneAndShop(setPhone, phone, flowerShop, callback);
}

Service.prototype.deleteWish = function(obj, callback){
	flowerInfo.deleteWish(obj.setPhone, obj.phone, obj.flowerShop, obj.orderId, callback);
}

Service.prototype.createUser = function(obj, callback){
	userInfo.readUser(obj.phone, function(err, res){
		if(err){
			callback(err, res);
		}else{
			if(res == null){
				userInfo.createUser(obj, callback);
			}
			res = "verifySucceed";
			callback(err, res);
		}
	});

}

Service.prototype.readUser = function(obj, callback){
	userInfo.readUser(obj.phone, function(err, res){
		if(err){
			callback(err, res);
		}else{
			if(res != null && res.password == obj.password){
				res = "verifySucceed";
				callback(err, res);
			}else{
				res = "verifyFailed";
				callback(err, res);
			}
		}
	});
}

Service.prototype.updateUser = function(obj, callback){
	userInfo.updateUser(obj, callback);
}

Service.prototype.deleteUser = function(phone, callback){
	userInfo.deleteUser(phone, callback);
}

Service.prototype.readOrderIds = function(orderId, callback){
	flowerInfo.readOrderIds(orderId, callback);
}

Service.prototype.updateWish = function(obj, callback){
	console.log(obj);
	flowerInfo.updateWish(obj.phone, obj.orderId, obj, callback);
}

exports = module.exports = new Service();
