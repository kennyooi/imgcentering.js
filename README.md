imgcentering.js
===============

imgCentering.js is a lightweight jQuery plugin (about 1kB with minified) that used to center and resize images/pictures based on its original ratio within a fix dimension container.

Demo Page
===============

http://www.inwebson.com/demo/imgcentering/

How It Works
===============

imgCentering.js will NOT crop your images, but it will centering them inside a fix dimension container while hide those oversize part of images using CSS overflow properties. Also, it manages to resize your images according to its container while maintain its original ratio.

Configuration
===============

	.imgCentering( [Options] )
  
- **forceWidth** 	  - Force image width same to it’s container’s width. *(false)*
- **forceHeight**	  - Force image height same to it’s container’s height. *(false)*
- **forceSmart**	  - Auto detect which option (forceWidth or forceHeight) is better, hence leave no empty space. *(false)*
- **bgColor**	      - Background color for empty space. *(inherit)*

For more detail on set up and configuration, do visit http://www.inwebson.com/jquery/imgcentering-js-centering-images-plugin/.
