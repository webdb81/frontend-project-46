import fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFilePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

test('compare test', () => {
  const file1 = getFilePath('file1.json');
  const file2 = getFilePath('file2.json');
  const expectedFile = getFilePath('expected_result.txt');

  const compareFiles = gendiff(file1, file2);
  const expectedResult = fs.readFileSync(expectedFile, 'utf-8');

  // console.log(`Received\n${compareFiles}`);
  // console.log(`Expected\n${expectedResult}`);

  // expect(compareFiles).toBe(expectedResult);
  expect(compareFiles).toEqual(expectedResult);
});
