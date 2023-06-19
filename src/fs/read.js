import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToReadPath = join(__dirname, 'files', 'fileToRead.txt');
  try {
    const content = await readFile(fileToReadPath, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();