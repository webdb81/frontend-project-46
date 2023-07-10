import yaml from 'js-yaml';

const parse = (fileData, fileFormat) => {
  switch (fileFormat) {
    case 'json':
      return JSON.parse(fileData);
    case 'yml':
    case 'yaml':
      return yaml.load(fileData);
    default:
      throw new Error(`Received file format ${fileFormat} is not supported`);
  }
};

export default parse;
