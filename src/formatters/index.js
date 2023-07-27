import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (diffOutput, fileFormat) => {
  switch (fileFormat) {
    case 'stylish':
      return stylish(diffOutput);
    case 'plain':
      return plain(diffOutput);
    case 'json':
      return json(diffOutput);
    default:
      throw new Error(`Received file format <${fileFormat}> is not supported`);
  }
};
