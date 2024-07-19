/* exported getPropertyValue */
function getPropertyValue(object: any, key: any): any {
  const values: any = object[key];
  return values;
}
// wont let me save with object[key] even tho live server treats it as correct.
// had to change annotation for this to be allowed, won't let me save without.
