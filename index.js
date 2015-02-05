var finder = require('findit')('../../');
var path = require('path');

finder.on('directory', function (dir, stat, stop) {
  // console.log(dir);
});

finder.on('file', function (file, stat) {
  if( file.match('package.json') ){
    console.log(file);
  }
});

finder.on('link', function (link, stat) {
    // console.log(link);
});