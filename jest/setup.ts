import * as child_process from 'child_process';
import { promisify } from 'util';

const exec = promisify(child_process.exec);

const isContainerHealthy = async (container: string) => {
  const { stdout } = await exec(
    `docker inspect --format='{{.State.Health.Status}}' ${container}`,
  );

  return stdout === 'healthy\n';
};

const waitForContainerBeReady = async (container: string) => {
  let isHealthy: boolean;
  do {
    await promisify(setTimeout)(1000);
    process.stdout.write('.');
    isHealthy = await isContainerHealthy(container);
  } while (!isHealthy);
};

module.exports = async () => {
  process.stdout.write('\nStarting containers for tests.\n');
  await exec('docker-compose up -d db');
  process.stdout.write('Waiting');
  await waitForContainerBeReady('database');
  process.stdout.write('Test setup completed\n');
};
