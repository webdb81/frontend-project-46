import _ from 'lodash';

const comparer = (dataFile1, dataFile2) => {
  const keys = _.union(Object.keys(dataFile1), Object.keys(dataFile2)).sort();
  // const keys = _.sortBy(_.union(_.keys(dataFile1), _.keys(dataFile2)));

  const getDiff = keys.map((key) => {
    // Same Keys in Both Files is Object: build NESTED childrens
    if (_.isPlainObject(dataFile1[key]) && _.isPlainObject(dataFile2[key])) {
      return { key, children: comparer(dataFile1[key], dataFile2[key]), type: 'nested' };
    }

    // Key in file2, not in file1 — ADDED
    if (!Object.hasOwn(dataFile1, key)) {
      return { key, value: dataFile2[key], type: 'added' };
    }

    // Key in file1, not in file2 — DELETED
    if (!Object.hasOwn(dataFile2, key)) {
      return { key, value: dataFile1[key], type: 'deleted' };
    }

    // Keys Same, Values Different — CHANGED
    if (!_.isEqual(dataFile1[key], dataFile2[key])) {
      return {
        key, valueMinus: dataFile1[key], valuePlus: dataFile2[key], type: 'changed',
      };
    }

    // Keys Same, Values Same — UNCHANGED
    return { key, value: dataFile1[key], type: 'unchanged' };
  });

  return getDiff;
};

export default comparer;
