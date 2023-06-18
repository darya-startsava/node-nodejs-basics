import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToCalculateHashForPath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const { createHash } = await import('node:crypto');
  const hash = createHash('sha256');
  const input = createReadStream(fileToCalculateHashForPath);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();