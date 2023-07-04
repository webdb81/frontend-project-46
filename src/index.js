// import path from 'path';
import fs from 'fs';
import comparer from './comparer.js';

/* v1
const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => JSON.parse(fs.readFileSync(filepath, 'utf-8'));

const gendiff = (filepath1, filepath2) => {
  const dataFile1 = getData(getFilePath(filepath1));
  const dataFile2 = getData(getFilePath(filepath2));

  return comparer(dataFile1, dataFile2);
};

export default gendiff;
*/

/* v2
*/
const gendiff = (filepath1, filepath2) => {
  const dataFile1 = JSON.parse(fs.readFileSync(filepath1, 'utf-8'));
  const dataFile2 = JSON.parse(fs.readFileSync(filepath2, 'utf-8'));

  // const dataParse1 = JSON.parse(dataFile1);
  // const dataParse2 = JSON.parse(dataFile2);

  return comparer(dataFile1, dataFile2);
};

export default gendiff;
