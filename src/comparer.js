import _ from 'lodash';

/* v2
const comparer = (dataFile1, dataFile2) => {
  const keysFile1 = _.keys(dataFile1);
  const keysFile2 = _.keys(dataFile2);
  const allKeys = _.sortBy(_.union(keysFile1, keysFile2));

  const result = allKeys.reduce((acc, key) => {
    if (!_.has(dataFile1, key)) {
      acc.push(`  + ${key}: ${dataFile2[key]}\n`);
    } else if (!_.has(dataFile2, key)) {
      acc.push(`  - ${key}: ${dataFile1[key]}\n`);
    } else if (dataFile1[key] !== dataFile2[key]) {
      acc.push(`  - ${key}: ${dataFile1[key]} \n  + ${key}: ${dataFile2[key]}\n`);
    } else {
      acc.push(`    ${key}: ${dataFile1[key]}\n`);
    }
    return acc;
  }, []);
  return `{\n${result.join('')}}`;
};
*/

const comparer = (dataFile1, dataFile2) => {
  const keys = _.union(Object.keys(dataFile1), Object.keys(dataFile2)).sort();
  // const keys = _.union(_.keys(dataFile1), _.keys(dataFile2)).sort();

  // const getDiff = keys.map((key) => { ===>> two timeout on same line
  const getDiff = keys.flatMap((key) => {
    const tempResult = [];

    // Keys Same, Values Same
    // if (_.has(dataFile1, key) && _.has(dataFile2, key)) {
    if (Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      if (dataFile1[key] === dataFile2[key]) {
        tempResult.push(`    ${key}: ${dataFile1[key]}`);
      }
    }
    // Keys Same, Values Different
    // if (_.has(dataFile1, key) && _.has(dataFile2, key)) {
    if (Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      if (dataFile1[key] !== dataFile2[key]) {
        tempResult.push(`  - ${key}: ${dataFile1[key]}`);
        tempResult.push(`  + ${key}: ${dataFile2[key]}`);
      }
    }
    // Key in file1, not in file2
    // if (_.has(dataFile1, key) && !_.has(dataFile2, key)) {
    if (Object.hasOwn(dataFile1, key) && !Object.hasOwn(dataFile2, key)) {
      tempResult.push(`  - ${key}: ${dataFile1[key]}`);
    }

    // Key in file2, not in file1
    // if (!_.has(dataFile1, key) && _.has(dataFile2, key)) {
    if (!Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      tempResult.push(`  + ${key}: ${dataFile2[key]}`);
    }

    return tempResult;
  });

  /* output v1
  const resultConcat = _.concat('{', getDiff, '}');
  const result = _.join(resultConcat, '\n');
  return result;
  */

  /* output v2
  */
  const result = `{\n${getDiff.join('\n')}\n}`;
  return result;

  // return `{\n${getDiff.join('\n')}\n}`;
};

export default comparer;
