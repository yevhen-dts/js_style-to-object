'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splited = sourceString.split(';').map((value) => {
    return value.split(':').map((part) => part.trim());
  });

  const result = {};

  splited.forEach((arr) => {
    const [key, value] = arr;

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
