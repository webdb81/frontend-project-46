import _ from 'lodash';

const comparer = (dataFile1, dataFile2) => {
  const keys = _.union(Object.keys(dataFile1), Object.keys(dataFile2)).sort();
  // const keys = _.union(_.keys(dataFile1), _.keys(dataFile2)).sort();

  const getDiff = keys.flatMap((key) => {
    const tempResult = [];

    // Key in file2, not in file1 — ADDED
    // if (!_.has(dataFile1, key) && _.has(dataFile2, key)) {
    if (!Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      tempResult.push(`  + ${key}: ${dataFile2[key]}`);
    }

    // Key in file1, not in file2 — DELETED
    // if (_.has(dataFile1, key) && !_.has(dataFile2, key)) {
    if (Object.hasOwn(dataFile1, key) && !Object.hasOwn(dataFile2, key)) {
      tempResult.push(`  - ${key}: ${dataFile1[key]}`);
    }

    // Keys Same, Values Different — CHANGED
    // if (_.has(dataFile1, key) && _.has(dataFile2, key)) {
    if (Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      if (dataFile1[key] !== dataFile2[key]) {
        tempResult.push(`  - ${key}: ${dataFile1[key]}`);
        tempResult.push(`  + ${key}: ${dataFile2[key]}`);
      }
    }

    // Keys Same, Values Same — UNCHANGED
    // if (_.has(dataFile1, key) && _.has(dataFile2, key)) {
    if (Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      if (dataFile1[key] === dataFile2[key]) {
        tempResult.push(`    ${key}: ${dataFile1[key]}`);
      }
    }

    return tempResult;
  });

  // Output v1
  // const resultConcat = _.concat('{', getDiff, '}');
  // const result = _.join(resultConcat, '\n');
  // return result;

  // Output v2
  const result = `{\n${getDiff.join('\n')}\n}`;
  return result;

  // Output v3
  // return `{\n${getDiff.join('\n')}\n}`;
};

export default comparer;
