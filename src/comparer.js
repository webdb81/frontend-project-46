import _ from 'lodash';

const comparer = (dataFile1, dataFile2) => {
  // const keys = _.union(Object.keys(dataFile1), Object.keys(dataFile2)).sort();
  const keys = _.sortBy(_.union(_.keys(dataFile1), _.keys(dataFile2)));

  const getDiff = keys.map((key) => {
    // Same Keys in Both Files is Object: build NESTED childrens
    if (_.isPlainObject(dataFile1[key]) && _.isPlainObject(dataFile2[key])) {
      return { key, type: 'nested', value: comparer(dataFile1[key], dataFile2[key]) };
    }

    // Key in file2, not in file1 — ADDED
    if (!_.has(dataFile1, key)) {
      return { key, type: 'added', value: dataFile2[key] };
    }

    // Key in file1, not in file2 — DELETED
    if (!_.has(dataFile2, key)) {
      return { key, type: 'deleted', value: dataFile1[key] };
    }

    // Keys Same, Values Different — CHANGED
    if (dataFile1[key] !== dataFile2[key]) {
      return {
        key, type: 'changed', value1: dataFile1[key], value2: dataFile2[key],
      };
    }

    // Keys Same, Values Same — UNCHANGED
    return { key, type: 'unchanged', value: dataFile2[key] };
  });

  return getDiff;
};

export default comparer;
