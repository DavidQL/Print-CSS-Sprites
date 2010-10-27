
(function( $ ){
  $.fn.printSprite = function() {
  
    return this.each(function() {
	
		var $this = $(this);
		
		if ($.browser.msie == true) {
			var back_x = $this.css('background-position-x'),
				back_y = $this.css('background-position-y'),
				back_position = back_x+" "+back_y;
		} else {
				var back_position = $this.css('background-position');
		}

		var back_image = $this.css('background-image'),
			width = $this.width(),
			height = $this.height(),
			index1 = back_image.indexOf('http');
		if (back_image.indexOf('.png') >= 0) { index2 = back_image.indexOf('.png'); }
		if (back_image.indexOf('.jpg') >= 0) { index2 = back_image.indexOf('.jpg'); }
		if (back_image.indexOf('.gif') >= 0) { index2 = back_image.indexOf('.gif'); }

		back_position = back_position.split(" ");
		back_image = back_image.substring(index1, (index2+4));

		$this
			.attr('title',$this.text())
			.empty()
			.append('<img src="'+back_image+'"/>')
			.css('width',width)
			.css('height',height)
			.css('overflow','hidden')
			.css('background','none')
			.css('text-indent','0px')
			.find('img')
				.css('margin-left',back_position[0])
				.css('margin-top',back_position[1]);
			
	});

  };
})( jQuery );
