/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */
const SMSClient = require('@alicloud/sms-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIIWRibiF30M3F'
const secretAccessKey = 'j6lqpCSPhco1ZINaQ2XvN1tmF80kRK'
//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})
var Message = function(){};

// test
Message.prototype.sendMessage = function(phone, callback){
	var res = getNumber();
	smsClient.sendSMS({
	    PhoneNumbers: phone,
	    SignName: 'LoveMemory',
	    TemplateCode: 'SMS_137870100',
	    TemplateParam: JSON.stringify({"code": res})
	}).then(function (res) {
    	let {Code}=res
    	if (Code === 'OK') {
        	//处理返回参数
        	console.log(res)
    	}
	}, function (err) {
    	console.log(err)
	});
	callback(res);
};
// login
Message.prototype.loginMessage = function(phone, product, callback){
	var res = getNumber();
	smsClient.sendSMS({
	    PhoneNumbers: phone,
	    SignName: 'LoveMemory',
	    TemplateCode: 'SMS_137870100',
	    TemplateParam: JSON.stringify({"code": res})
	}).then(function (res) {
    	let {Code}=res
    	if (Code === 'OK') {
        	//处理返回参数
        	console.log(res)
    	}
	}, function (err) {
    	console.log(err)
	});
	callback(res);
}
// register
Message.prototype.registerMessage = function(phone, product, callback){
	var res = getNumber();
	smsClient.sendSMS({
	    PhoneNumbers: phone,
	    SignName: 'LoveMemory',
	    TemplateCode: 'SMS_137870100',
	    TemplateParam: JSON.stringify({"code": res})
	}).then(function (res) {
    	let {Code}=res
    	if (Code === 'OK') {
        	//处理返回参数
        	console.log(res)
    	}
	}, function (err) {
    	console.log(err)
	})
	callback(res);
}
// identity
Message.prototype.identityMessage = function(phone, product, callback){
	var res = getNumber();
	smsClient.sendSMS({
	    PhoneNumbers: phone,
	    SignName: 'LoveMemory',
	    TemplateCode: 'SMS_137870100',
	    TemplateParam: JSON.stringify({"code": res})
	}).then(function (res) {
    	let {Code}=res
    	if (Code === 'OK') {
        	//处理返回参数
        	console.log(res)
    	}
	}, function (err) {
    	console.log(err)
	})
	callback(res);
}
// update
Message.prototype.updateMessage = function(phone, product, callback){
	var res = getNumber();
	smsClient.sendSMS({
	    PhoneNumbers: phone,
	    SignName: 'LoveMemory',
	    TemplateCode: 'SMS_137870100',
	    TemplateParam: JSON.stringify({"code": res})
	}).then(function (res) {
    	let {Code}=res
    	if (Code === 'OK') {
        	//处理返回参数
        	console.log(res)
    	}
	}, function (err) {
    	console.log(err)
	})
	callback(res);
}

function getNumber(){
	var charactors = "0123456789";
	var value = '';
	var k;
	for(var i = 0; i < 4; i++){
		k = parseInt(10 * Math.random());
		value += charactors.charAt(k);
	}
	return value;
}

exports = module.exports = new Message();