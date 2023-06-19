import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToWritePath = join(__dirname, 'files', 'fileToWrite.txt');
  const writer = createWriteStream(fileToWritePath, { flags: 'a' });
  await pipeline(process.stdin, writer);
};

await write();