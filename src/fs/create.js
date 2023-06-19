import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const newFilePath = join(__dirname, 'files', 'fresh.txt');
  try {
    await writeFile(newFilePath, 'I am fresh and young', { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};
await create();