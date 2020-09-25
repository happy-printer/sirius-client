import { promises as fs } from 'fs';
import yaml from 'js-yaml';

export default async (path: string): Promise<any> => {
  return yaml.safeLoad(await fs.readFile(path, 'utf8'));
};
