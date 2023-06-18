import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const performCalculations = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const workerPath = join(__dirname, 'worker.js');
  const promiseArray = [];

  for (let i = 0; i < cpus().length; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: i + 10 });
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });
    promiseArray.push(promise);
  };
  
  const result = await Promise.all(promiseArray);
  console.log(result);
};

await performCalculations();