import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToCompressPath = join(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = join(__dirname, 'files', 'archive.gz');
  const gzip = createGzip();
  const source = createReadStream(fileToCompressPath);
  const destination = createWriteStream(zipPath);
  await pipeline(source, gzip, destination);
};

await compress();