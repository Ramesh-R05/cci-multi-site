const fs = require('fs');
const path = require('path');

if (!process.env.APP_KEY) throw new Error('APP_KEY environment variable not set');

function fileExists(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

// eslint-disable-next-line consistent-return,func-names
module.exports = function(url, prev, done) {
    if (url.indexOf('../../node_modules') >= 0 || prev.indexOf('node_modules') >= 0) return done(null);

    // console.log('\n\nurl', url);
    // console.log('\n\nthis', this);
    const filePath = path.resolve('app/styles');
    // console.log('filePath', filePath);
    const paths = filePath.split(path.sep);
    const baseName = path.basename(url);

    // eslint-disable-next-line no-param-reassign
    url = url.replace(baseName, `_${baseName}`);
    paths.push(url);

    const originalPath = `${paths.join(path.sep)}.scss`;
    const replacementPath = originalPath.replace(
        `src${path.sep}app${path.sep}styles${path.sep}`,
        `src${path.sep}app-${process.env.APP_KEY}${path.sep}styles${path.sep}`
    );

    // console.log('replacementPath', replacementPath);
    if (fileExists(replacementPath)) {
        // console.log('fileExists - replacementPath', replacementPath);
        // enable for debugging only as the log text will appear in the stylesheet code
        // console.log(`/* -> replacement found for ${originalPath}, using ${replacementPath} */`);
        done({ file: replacementPath });
    } else done(null);
};
