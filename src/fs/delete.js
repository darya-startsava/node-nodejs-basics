import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToRemovePath = join(__dirname, 'files', 'fileToRemove.txt');
  if (!existsSync(fileToRemovePath)) {
    throw new Error('FS operation failed');
  } else { rm(fileToRemovePath); }
};

await remove();