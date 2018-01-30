var pic = require('cat-picture');
var image = require('lightning-image-poly');

var src = pic.src;
pic.remove();

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});
