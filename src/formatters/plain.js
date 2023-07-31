import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  return _.isString(value) ? `'${value}'` : value;
};

const plain = (dataFile, key = '') => {
  const rows = dataFile.flatMap((node) => {
    const currentKey = key ? `${key}.${node.key}` : node.key;
    switch (node.type) {
      case 'added':
        return `Property '${currentKey}' was added with value: ${stringify(node.value)}`;
      case 'deleted':
        return `Property '${currentKey}' was removed`;
      case 'changed':
        return `Property '${currentKey}' was updated. From ${stringify(node.valueMinus)} to ${stringify(node.valuePlus)}`;
      case 'unchanged':
        return [];
      case 'nested':
        return plain(node.value, currentKey);
      default:
        throw new Error(`Received node type ${node.type} is unknown.`);
    }
  });
  return rows.join('\n');
};

export default plain;
