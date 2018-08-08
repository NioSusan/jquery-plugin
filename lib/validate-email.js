(function ($) {
	$.fn.emailValidator = function () {
			const emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return emailReg.test(this.val());
	}
})(jQuery)




