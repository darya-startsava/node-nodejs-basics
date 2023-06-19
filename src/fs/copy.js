import { mkdir, readdir, copyFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const newFolderPath = join(__dirname, 'files_copy');
  const filesFolderPath = join(__dirname, 'files');

  try {
    await access(filesFolderPath);
    await mkdir(newFolderPath);
    const files = await readdir(filesFolderPath);
    for (const file of files) {
      await copyFile(join(filesFolderPath, file), join(newFolderPath, file));
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
