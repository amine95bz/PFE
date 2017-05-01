define([
	'$',
	'underscore',
	'backbone',
	'collections/reqs',
	'views/todos',
	'common'
], function( $, _, Backbone, Reqs, ReqView, Common ) {

	var AppView = Backbone.View.extend({

		el: '.req-app',

	
		events: {
			'keypress .req-app-new': 'createOnEnter',
			'click .req-app-toggle-all': 'toggleAllComplete'
		},

		initialize: function() {
			this.input = this.$('.req-app-new');
			this.allCheckbox = this.$('.req-app-toggle-all')[0];
			this.$main = this.$('.req-app-main');

			Reqs.on( 'add', this.addOne, this );
			Reqs.on( 'reset', this.addAll, this );
			Reqs.on( 'change:completed', this.filterOne, this );
			Reqs.on( "filter", this.filterAll, this);
			Reqs.on( 'all', this.render, this );

			Reqs.fetch();
		},

		render: function() {
			var completed = Reqs.completed().length;
			var remaining = Reqs.remaining().length;

			if ( Reqs.length ) {
				this.$main.show();
			} else {
				this.$main.hide();
			}

			this.allCheckbox.checked = !remaining;
		},

		addOne: function( about ) {
			var view = new ReqView({ model: req });
			$('.req-list').append( view.render().el );
		},

		addAll: function() {
			this.$('.req-list').html('');
			Reqs.each(this.addOne, this);
		},

		filterOne : function (about) {
			req.trigger("visible");
		},

		filterAll : function () {
			Reqs.each(this.filterOne, this);
		},

		newAttributes: function() {
			return {
				title: this.input.val().trim(),
				order: Reqs.nextOrder(),
				completed: false
			};
		},

		createOnEnter: function( e ) {
			if ( e.which !== Common.ENTER_KEY || !this.input.val().trim() ) {
				return;
			}

			Reqs.create( this.newAttributes() );
			this.input.val('');
		},

		clearCompleted: function() {
			_.each( Reqs.completed(), function( about ) {
				about.destroy();
			});

			return false;
		},

		toggleAllComplete: function() {
			var completed = this.allCheckbox.checked;

			Reqs.each(function( req ) {
				.save({
					'completed': completed
				});
			});
		}
	});

	return AppView;
});
