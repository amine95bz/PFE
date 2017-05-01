
$(document).ready(function() {
				var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
				var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
				var $browserAlert = $('.browser-overlay');

				if(!isChrome && !isSafari) {
					$browserAlert.find('.close-button').click(function() {
						$browserAlert.hide();
					});

					$browserAlert.show();
				}

				var wm = new Ventus.WindowManager();

				var pos = 50;
				var num = 1;
				window.wm = wm; // For debugging reasons

				$('.create-button').click(function(){
					wm.createWindow.fromQuery('.req-app',{
						title: 'Requirement view ' + (num++),
						x: (pos += 20),
						y: pos,
						width: 400,
						height: 250,

						events: {
							closed: function() {
								this.destroy();
							}
						}
					})
					.open();
				});


				$('.expose-button').click(_.throttle(function(){
					if(wm.mode === 'expose')
						wm.mode = 'default';
					else
						wm.mode = 'expose';

					return false;
				}, 1000));
			});
		