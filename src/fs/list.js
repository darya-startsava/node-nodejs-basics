import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filesFolderPath = join(__dirname, 'files');
  if (!existsSync(filesFolderPath)) {
    throw new Error('FS operation failed');
  } else {
    const files = await readdir(filesFolderPath);
    console.log(files);
  }
};

await list();