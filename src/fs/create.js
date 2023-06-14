import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const newFilePath = join(__dirname, 'files', 'fresh.txt');
  if (existsSync(newFilePath)) {
    throw new Error('FS operation failed');
  } else {
    writeFile(newFilePath, 'I am fresh and young');
  }
};

await create();