/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): any {
  const suffArr: string[] = [];
  for (let i = 0; i < words.length; i++) {
    suffArr[i] = words[i] + suffix;
  }
  return suffArr;
}
