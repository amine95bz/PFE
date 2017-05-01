define(function() {
	var requireAbout = require.config({
		context: 'about',

		baseUrl: 'about/js',

		shim: {
			'underscore': {
				exports: '_'
			},
			'backbone': {
				deps: [
					'underscore',
					'$'
				],
				exports: 'Backbone'
			},
			'$': {
				'exports': '$'
			}
		},
		paths: {
			'$': '../../../../vendor/jquery',
			underscore: 'lib/underscore',
			backbone: 'lib/backbone/backbone',
			text: 'lib/require/text'
		}
	});

	requireAbout(['views/app','routers/router'], function(AppView, Workspace) {
		
		new Workspace();
		Backbone.history.start();

		new AppView();
	});
});

