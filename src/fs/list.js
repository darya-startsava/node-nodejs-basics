import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filesFolderPath = join(__dirname, 'files');
  
  try {
    const files = await readdir(filesFolderPath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();