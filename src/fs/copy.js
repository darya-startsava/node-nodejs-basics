import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';


const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const newFolderPath = join(__dirname, 'files_copy');
  const filesFolderPath = join(__dirname, 'files');
  if (existsSync(newFolderPath) || !existsSync(filesFolderPath)) {
    throw new Error('FS operation failed');
  } else {
    await mkdir(newFolderPath);
    const files = await readdir(filesFolderPath);
    for (const file of files) {
      await copyFile(join(filesFolderPath, file), join(newFolderPath, file));
    }

  };
};

await copy();
