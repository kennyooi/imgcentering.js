/*
* imgCentering.js jQuery Plugin
* A jQuery plugin to centering your pictures and images
*
* Name:			imgCentering.js
* Author:		Kenny Ooi - http://www.inwebson.com
* Date:			September 28, 2012		
* Version:		1.1
* Example:		http://www.inwebson.com/demo/imgcentering/
*
*/
(function($){
	var blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

	var imgCentering = function(obj, options) {
		var defaults = {
			'forceWidth': false,
			'forceHeight': false,
			'forceSmart': false,
			'bgColor': "inherit"
		};
		
		function forceWidth(obj) {
			obj.css('width', '100%');
		}
		
		function forceHeight(obj) {
			obj.css('height', '100%');
		}

		var img = $(obj);
		var settings = $.extend(defaults, options);
		img.load( function() {
			
			//get container width and height
			var _conwidth = img.parent().width();
			var _conheight = img.parent().height();
			
			//get container position and bgcolr css
			var _parentpos = img.parent().css('position');
			if( settings.bgColor == 'inherit' )
				var _parentbg = img.parent().css('backgroundColor');
			else
				var _parentbg = settings.bgColor;
						
			//reset img to full dimension
			img.css('width', 'auto');
			img.css('height', 'auto');
						
			if( settings.forceSmart ) {
				var _fullratio = img.width() / img.height();
				var _conratio = _conwidth / _conheight;
				if( _fullratio < _conratio ) 
					forceWidth(img);
				else 
					forceHeight(img);
			} else {
				if( settings.forceWidth )
					forceWidth(img);
				if( settings.forceHeight )	
					forceHeight(img);
			}
						
			//get final image dimension
			var _finalwidth = img.width();
			var _finalheight = img.height();
			
			img.css({
				'position': 'relative',
				'left': -(_finalwidth-_conwidth)/2+'px',
				'top': -(_finalheight-_conheight)/2+'px'
			})
			.parent().css({
				'position': _parentpos,
				'overflow': 'hidden',
				'backgroundColor': _parentbg
			});
		});
		
		if( obj.complete || obj.complete === undefined ) {
			var src = obj.src;
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			// data uri bypasses webkit log warning (thx doug jones)
			obj.src = blank;
			obj.src = src;
		}
	}
	
	$.fn.imgCentering = function(options) {
		
		return this.each( function(e) {
			var img = $(this);
			if(img.data('imgCentering')) return;
			
			var imgcenter = new imgCentering(this, options);
			img.data('imgCentering', imgcenter);
			
		});
	}
	
})(jQuery);