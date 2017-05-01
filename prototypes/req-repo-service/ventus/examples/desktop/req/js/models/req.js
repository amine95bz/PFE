define([
	'underscore',
	'backbone'
], function( _, Backbone ) {

	var ReqModel = Backbone.Model.extend({

		defaults: {
			title: '',
			completed: false
		},


		toggle: function() {
			this.save({
				completed: !this.get('completed')
			});
		}
	});

	return ReqModel;
});
