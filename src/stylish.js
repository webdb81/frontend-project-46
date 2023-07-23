import _ from 'lodash';

const getOffset = (level, replacer = ' ', setGap = 4) => replacer.repeat(level * setGap);

const stringify = (value, level) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }

  const offset = getOffset(level);
  const bracketOffset = getOffset(level - 1);

  const rows = Object.entries(value).map(([key, val]) => `${offset}${key}: ${stringify(val, level + 1)}`);

  return [
    '{', ...rows, `${bracketOffset}}`,
  ].join('\n');
};

const stylish = (diffOutput, level = 1) => {
  const offset = getOffset(level).slice(0, -2);
  const bracketOffset = getOffset(level - 1);
  const rows = diffOutput.flatMap((item) => {
    switch (item.type) {
      case 'added':
        return `${offset}+ ${item.key}: ${stringify(item.value, level + 1)}`;
      case 'deleted':
        return `${offset}- ${item.key}: ${stringify(item.value, level + 1)}`;
      case 'changed':
        return [
          `${offset}- ${item.key}: ${stringify(item.valueMinus, level + 1)}`,
          `${offset}+ ${item.key}: ${stringify(item.valuePlus, level + 1)}`,
        ].join('\n');
      case 'unchanged':
        return `${offset}  ${item.key}: ${stringify(item.value, level + 1)}`;
      case 'nested':
        return `${offset}  ${item.key}: ${stylish(item.children, level + 1)}`;
      default:
        throw new Error(`Received item type <${item.type}> is unknown.`);
    }
  });
  return [
    '{', ...rows, `${bracketOffset}}`,
  ].join('\n');
};

export default stylish;
