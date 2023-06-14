import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToReadPath = join(__dirname, 'files', 'fileToRead.txt');
  if (!existsSync(fileToReadPath)) {
    throw new Error('FS operation failed');
  } else {
    const content = await readFile(fileToReadPath, { encoding: 'utf8' });
    console.log(content);
  }
};

await read();