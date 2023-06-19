import { createReadStream } from 'fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToReadPath = join(__dirname, 'files', 'fileToRead.txt');
  const reader = createReadStream(fileToReadPath);
  reader.on('data', (chunk) => { process.stdout.write(chunk.toString()); });
};

await read();