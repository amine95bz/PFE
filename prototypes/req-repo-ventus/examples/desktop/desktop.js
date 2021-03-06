
(function($, Ventus) {
	document.addEventListener('DOMContentLoaded', function() {
		var wm = new Ventus.WindowManager();

		window.wm = wm; // For debugging reasons

		// Terminal
		var terminalWin = wm.createWindow.fromQuery('.terminal-app', {
			title: 'Terminal',
			classname: 'terminal-window',
			width: 350,
			height: 200,
			x: 50,
			y: 40
		});

		terminalWin.signals.on('click', function(win){
			terminal.display.focus();
		});

		var terminal = new Terminus('.terminal-app', {
			welcome: '<div class="identity"><img src="terminal/img/logo.png" /><h1>Terminal.js</h1> ' +
				Terminus.version +
				'</div>Copyright cc.<br/>' +
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
			width: 250,
			height: 280,
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



		var graphWin = wm.createWindow.fromQuery('.graph-app', {
			title: 'Graph Result',
			width: 250,
			height: 280,
			x: 90,
			y: 345

		});

		var aboutWin = wm.createWindow.fromQuery('.about-app', {
			title: 'About',
			width: 160,
			height: 220,
			x: 300,
			y: 45

		});

		// requirement view 
		var reqWin = wm.createWindow.fromQuery('.req-app', {
			title: 'Requirement view',
			width: 250,
			height: 280,
			x: 943,
			y: 40
			display: flex;
		});

		// Database view 
		var dbWin = wm.createWindow.fromQuery('.db-app', {
			title: 'Database',
			width: 250,
			height: 280,
			x: 620,
			y: 40
		});


		//group view
		var grpWin = wm.createWindow.fromQuery('.grp-app', {
			title: 'Group',
			width: 250,
			height: 280,
			x: 950,
			y: 300
		});

		// group 2 view 
		var grp2Win = wm.createWindow.fromQuery('.grp2-app', {
			title: 'Group 2',
			width: 250,
			height: 280,
			x: 350,
			y: 300
		});


		// na7i loader when loaded
		var loader = $("#loading-screen");

		// for look and feel reasons
		function openWithDelay(win, delay) {
			setTimeout(function(){win.open();}, delay);
		}

		function init() {
			loader.addClass('hide');
			loader.on(Ventus.browser.animationEventName(), function() {
				loader.hide();

				// open views 
				openWithDelay(terminalWin, 10);
				//to display todo window 
				//openWithDelay(todoWin, 20);
				openWithDelay(aboutWin, 30);
				//to display the video window
				//openWithDelay(playerWin, 40);
				openWithDelay(reqWin, 50);
				openWithDelay(grpWin, 60);
				openWithDelay(grp2Win, 70);
				openWithDelay(dbWin, 80);
				openWithDelay(graphWin, 80);


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
		}, 500);

	
		// Exposé test button
		 $(".expose-button").click(_.throttle(function(){
			wm.mode = 'expose';
			return false;
		}, 1000)); 
	});
})($, Ventus);
