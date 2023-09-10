module.exports = {
	checkTelephone(val) {
		// 验证手机号码的格式
		var reg = /^((13\d)|(15[012356789])|(166)|(17[0345678])|(14[1567])|(19\d)|(18\d))\d{8}$/;
		return reg.test(val);
	},

}
