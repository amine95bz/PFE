define(function() {
	var requireTodo = require.config({
		context: 'todo',

		baseUrl: 'todo/js',

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

	requireTodo(['views/app','routers/router'], function(AppView, Workspace) {
		// initialize routing and start backbone.history()
		new Workspace();
		Backbone.history.start();

		// initialize the application view, reopen 
		new AppView();
	});
});

