/* eslint linebreak-style: ["error", "windows"] */
export function taskFirst() {
  const task = 'I prefer const when I can.'; // \n
  return task; // \n
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
