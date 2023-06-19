import { fork } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const childProcessFilePath = join(__dirname, 'files', 'script.js');
  const child = fork(childProcessFilePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 11]);
