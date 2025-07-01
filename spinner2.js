process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinnerFrames = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
const frameDelay = 200;

spinnerFrames.forEach((frame, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, index * frameDelay);
});

setTimeout(() => {
  process.stdout.write('\n');
}, spinnerFrames.length * frameDelay);