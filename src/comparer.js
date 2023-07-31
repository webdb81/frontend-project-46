import _ from 'lodash';

const comparer = (dataFile1, dataFile2) => {
  // const keys = _.union(Object.keys(dataFile1), Object.keys(dataFile2)).sort();
  const keys = _.sortBy(_.union(_.keys(dataFile1), _.keys(dataFile2)));

  const getDiff = keys.map((key) => {
    if (_.isObject(dataFile1[key]) && _.isObject(dataFile2[key])) {
      return { key, value: comparer(dataFile1[key], dataFile2[key]), type: 'nested' };
    }
    if (!_.has(dataFile1, key)) return { key, value: dataFile2[key], type: 'added' };
    if (!_.has(dataFile2, key)) return { key, value: dataFile1[key], type: 'deleted' };
    if (dataFile1[key] !== dataFile2[key]) {
      return {
        key,
        valueMinus: dataFile1[key],
        valuePlus: dataFile2[key],
        type: 'changed',
      };
    }
    return { key, value: dataFile2[key], type: 'unchanged' };
  });

  return getDiff;
};

export default comparer;
