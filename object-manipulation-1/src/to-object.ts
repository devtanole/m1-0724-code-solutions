/* exported toObject */
function toObject(keyValuePair: any[]): object {
  const kvpObj: object = {};
  const [key, value] = keyValuePair;
  kvpObj[key] = value;
  return kvpObj;
}
