/* exported isVowel */
function isVowel(char: string): any {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u' ||
    char === 'A' ||
    char === 'E' ||
    char === 'I' ||
    char === 'O' ||
    char === 'U'
  ) {
    return true;
  }
  return false;
}
