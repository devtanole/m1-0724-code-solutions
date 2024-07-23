/* exported countdown */
const countdown = (num: number): any => {
  const arrayCount = [];
  for (let i = 0; i <= num; i++) {
    arrayCount.push(num - i);
  }
  return arrayCount;
};
