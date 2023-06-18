import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
  const reverseInput = (input) => input.split('').reverse().join('');

  const transformInput = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseInput(chunk.toString()));
    }
  });

  await pipeline(process.stdin, transformInput, process.stdout);

};

await transform();