function getScores() {
  return [70, 80, 90, 100];
}

let [x, y, ...args] = getScores();

console.log({ x, y, args });