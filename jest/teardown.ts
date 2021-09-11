import * as child_process from 'child_process';
import { promisify } from 'util';

const exec = promisify(child_process.exec);

module.exports = async () => {
  process.stdout.write('Shutting down test containers');
  await exec(`docker-compose down`);
};
