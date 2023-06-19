
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToDecompressPath = join(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = join(__dirname, 'files', 'archive.gz');
  const gunzip = createGunzip();
  const source = createReadStream(zipPath);
  const destination = createWriteStream(fileToDecompressPath);
  await pipeline(source, gunzip, destination);
};

await decompress();

