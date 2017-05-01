define([
	'underscore',
	'backbone',
	'lib/backbone/localstorage',
	'models/req'
], function( _, Backbone, Store, Reqs ) {

	var ReqsCollection = Backbone.Collection.extend({
	
		model: Req,

	
		localStorage: new Store('reqs-backbone'),

	
		completed: function() {
			return this.filter(function( req ) {
				return req.get('completed');
			});
		},


		remaining: function() {
			return this.without.apply( this, this.completed() );
		},

		nextOrder: function() {
			if ( !this.length ) {
				return 1;
			}
			return this.last().get('order') + 1;
		},


		comparator: function( req ) {
			return req.get('order');
		}
	});

	return new ReqsCollection();
});
