define([ 'require', 'dao/user.dao', 'resthub.controller', 'jquery.json' ], function(require) {

	$.widget("booking.userLogin", $.ui.controller, {
		_init : function() {
			this.cx().store('session').clearAll();
			var user = {
				username : this.cx().params.username,
				password : this.cx().params.password
			};
			require('dao/user.dao').check($.proxy(this, '_userLoggedIn'), $.toJSON(user));
		},
		_userLoggedIn : function(user) {
			this.cx().session('user', user);
			this.cx().redirect('#/home');
			this.cx().trigger('user-logged-in');
		}
	});

});
