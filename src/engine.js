import readlineSync from 'readline-sync';

const TOTAL_ROUNDS = 3;

export const startGame = (game) => {
  console.log('Добро пожаловать в игровую арену!');
  console.log(game.description);

  for (let round = 1; round <= TOTAL_ROUNDS; round++) {
    const { question, correctAnswer: expectedAnswer } = game.generateRound();
    console.log(`Вопрос: ${question}`);
    const userResponse = readlineSync.question('Ваш ответ: ');

    if (userResponse === expectedAnswer) {
      console.log('Правильно!');
    } else {
      console.log(`Неправильно. Правильный ответ: ${expectedAnswer}`);
      return;
    }
  }
  
  console.log('Поздравляем, вы выиграли!');
};
