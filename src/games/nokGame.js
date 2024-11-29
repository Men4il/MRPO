
const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const lcm = (x, y) => (x * y) / gcd(x, y);

const createNokGameRound = () => {
  const firstNumber = Math.floor(Math.random() * 20) + 1;
  const secondNumber = Math.floor(Math.random() * 20) + 1;

  const gameQuestion = `${firstNumber} и ${secondNumber}`;
  const correctAnswer = String(lcm(firstNumber, secondNumber));

  return { question: gameQuestion, correctAnswer };
};

export const lcmGame = {
  description: 'Найдите наименьшее общее кратное двух чисел.',
  generateRound: createNokGameRound,
};
