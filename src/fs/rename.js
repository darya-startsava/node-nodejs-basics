import fsPromises from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const beforeRenameFilePath = join(__dirname, 'files', 'wrongFilename.txt');
  const afterRenameFilePath = join(__dirname, 'files', 'properFilename.md');
  if (existsSync(afterRenameFilePath) || !existsSync(beforeRenameFilePath)) {
    throw new Error('FS operation failed');
  } else { fsPromises.rename(beforeRenameFilePath, afterRenameFilePath); }
};

await rename();