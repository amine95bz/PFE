
(function($, Ventus) {
	document.addEventListener('DOMContentLoaded', function() {
		var wm = new Ventus.WindowManager();

		window.wm = wm; // For debugging reasons

		// Terminal
		var terminalWin = wm.createWindow.fromQuery('.terminal-app', {
			title: 'Terminal',
			classname: 'terminal-window',
			width: 550,
			height: 300,
			x: 50,
			y: 40
		});

		terminalWin.signals.on('click', function(win){
			terminal.display.focus();
		});

		var terminal = new Terminus('.terminal-app', {
			welcome: '<div class="identity"><img src="terminal/img/logo.png" /><h1>Terminus.js</h1> ' +
				Terminus.version +
				'</div>Copyright Req-Repo 2017, M<sup>ed</sup> Amine Bouzid.<br/>' +
				'Press <span style="color:green">&lt; tab &gt;</span> to see a list of available commands.'
		});
		terminal.shell.include([TestCommands, ShapeCommands]);

		terminal.display.events.on('prompt', function() {
			terminalWin.$content.animate({
				scrollTop:terminalWin.el.find('.terminusjs').height()
			}, 300);
		});


		var todoWin = wm.createWindow.fromQuery('.todo-app', {
			title: 'Todo',
			width: 330,
			height: 400,
			x: 670,
			y: 40
		});

		var playerWin = wm.createWindow.fromQuery('.player-app', {
			title: 'Video Player',
			classname: 'player-window',
			width: 635,
			height: 300,
			x: 450,
			y: 320,
			resizable: false,
			opacity: 1 // To fix problems with chrome video on Linux
		});

		/*playerWin.titlebar = false;
		playerWin.widget = true;*/

		var aboutWin = wm.createWindow.fromQuery('.about-app', {
			title: 'About Ventus',
			width: 250,
			height: 280,
			x: 90,
			y: 345
		});

		var reqWin = wm.createWindow.fromQuery('.req-app', {
			title: 'Requirement view',
			width: 250,
			height: 280,
			x: 1080,
			y: 40
		});

		var grpWin = wm.createWindow.fromQuery('.grp-app', {
			title: 'Group',
			width: 250,
			height: 280,
			x: 1050,
			y: 345
		});


		// Hide loader when loaded
		var loader = $("#loading-screen");

		// For look & feel reasons
		function openWithDelay(win, delay) {
			setTimeout(function(){win.open();}, delay);
		}

		function init() {
			loader.addClass('hide');
			loader.on(Ventus.browser.animationEventName(), function() {
				loader.hide();

				// Open windows
				openWithDelay(terminalWin, 20);
				openWithDelay(todoWin, 20);
				openWithDelay(aboutWin, 40);
				openWithDelay(playerWin, 60);
				openWithDelay(reqWin, 10);
				openWithDelay(grpWin, 70);

			});
		}

		setTimeout(function() {
			var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
			var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
			var $browserAlert = $('.browser-overlay');

			if(!isChrome && !isSafari) {
				$browserAlert.find('.close-button').click(function() {
					$browserAlert.hide();

					init();
				});

				$browserAlert.show();
			} else {
				init();
			}
		}, 100);


		// Exposé test button
		$(".expose-button").click(_.throttle(function(){
			wm.mode = 'expose';
			return false;
		}, 1000));
	});
})($, Ventus);
