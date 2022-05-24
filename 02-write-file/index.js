const fs = require('fs');
const {stdin, stdout} = process;
const output = fs.createWriteStream('02-write-file/text.txt');

stdout.write('Hi, type a mess: ');
stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') process.exit();
  output.write(chunk);
});

if (process.on('SIGINT', () => {
  process.exit();
}));

process.on('exit', (code) => {
  if (code === 0) stdout.write('Goodbye!');
  else stdout.write(`error: ${code}`);
});