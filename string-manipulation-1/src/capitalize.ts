/* exported capitalize */
function capitalize(word: string): any {
  const capped = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capped;
}
