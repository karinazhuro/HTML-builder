const fs = require('fs');
const {stdout} = require('process');

async function readDir(dir) {
  try {
    fs.readdir(dir, (error, item) => {
      for (let i = 0; i < item.length; i++) {
        let fileName = `${item[i]}`;
        
        fs.stat(`${dir}/${item[i]}`, (error, stats) => {
          let fileSize = stats['size'];
          
          stdout.write(`${fileName.slice(0, fileName.lastIndexOf('.'))} - ${
            fileName.slice(fileName.lastIndexOf('.'))} - ${Math.round(fileSize / 1024)}kb\n`);
        });
      }
    });
  } catch (error) {
    stdout.write('Error: ', error.message);
  }
}

readDir(`${__dirname}/secret-folder`);