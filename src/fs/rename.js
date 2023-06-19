import fsPromises from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const beforeRenameFilePath = join(__dirname, 'files', 'wrongFilename.txt');
  const afterRenameFilePath = join(__dirname, 'files', 'properFilename.md');

  const isAfterRenameFilePath = await fsPromises.access(afterRenameFilePath, fsPromises.constants.F_OK)
    .then(() => true)
    .catch(() => false);
  if (isAfterRenameFilePath) {
    throw new Error('FS operation failed');
  }
  try {
    await fsPromises.rename(beforeRenameFilePath, afterRenameFilePath);
  } catch {
    throw new Error('FS operation failed');
  }

};

await rename();