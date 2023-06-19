import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(fileToRemovePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();