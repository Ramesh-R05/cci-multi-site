var fs = require('fs');
var path = require('path');

if (!process.env.APP_KEY) throw new Error('APP_KEY environment variable not set');

function fileExists(filePath) {
    try  {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

module.exports = function(url, prev, done) {
    if (url.indexOf('../../node_modules') >= 0 || prev.indexOf('node_modules') >= 0) return done(null);

// console.log('\n\nurl', url);
// console.log('\n\nthis', this);
    var filePath = path.resolve('app/styles');
    // console.log('filePath', filePath);
    var paths = filePath.split(path.sep);
    var baseName = path.basename(url);

    url = url.replace(baseName, `_${baseName}`);
    paths.push(url);

    var originalPath = paths.join(path.sep) + '.scss';
    var replacementPath = originalPath.replace(`src${path.sep}app${path.sep}styles${path.sep}`, `src${path.sep}app-${process.env.APP_KEY}${path.sep}styles${path.sep}`);

// console.log('replacementPath', replacementPath);
    if (fileExists(replacementPath)) {
        // console.log('fileExists - replacementPath', replacementPath);
        // enable for debugging only as the log text will appear in the stylesheet code
        //console.log(`/* -> replacement found for ${originalPath}, using ${replacementPath} */`);
        done({ file: replacementPath });

    }
    else done(null);
};
