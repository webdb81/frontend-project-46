import yaml from 'js-yaml';

const parse = (fileData, fileFormat) => {
  switch (fileFormat) {
    case 'json':
      return JSON.parse(fileData);
    case 'yml':
      return yaml.load(fileData);
    default:
      throw new Error(`Does not support ${fileFormat} format.`);
  }
};

export default parse;
