define([
	'$',
	'backbone',
	'collections/reqs',
	'common'
], function( $, Backbone, Reqs, Common ) {

	var Workspace = Backbone.Router.extend({
		routes:{
			'*filter': 'setFilter'
		},

		setFilter: function( param ) {
			
			Common.ReqFilter = param.trim() || '';

			
			Reqs.trigger('filter');
		}
	});

	return Workspace;
});
