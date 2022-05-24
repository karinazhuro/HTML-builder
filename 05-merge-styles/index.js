const fs = require('fs');
const path = require('path');
const {stdout} = process;

async function mergeBundle() {
  try {
    fs.promises.readdir(`${__dirname}/styles`, {withFileTypes: true})
      .then(files => {
        files.forEach(file => {
          if(file.isFile() && path.extname(file.name) === '.css') {
            fs.createReadStream(path.join(__dirname, 'styles', file.name)).on('data', data => {
              fs.createWriteStream(`${__dirname}/project-dist/bundle.css`).write(data);
            });
          }
        });
      });
  } catch (error) {
    stdout.write('Error: ', error.message);
  }
}

mergeBundle();