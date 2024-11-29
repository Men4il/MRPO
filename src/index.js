import readlineSync from 'readline-sync';
import { startGame } from './engine.js';
import { progressionGame } from './games/progressionGame.js';
import { lcmGame } from './games/nokGame.js';

const selectGame = () => {
  console.log('Пожалуйста, выберите игру:');
  console.log('1 - Арифметическая прогрессия');
  console.log('2 - НОК (Наименьшее общее кратное)');

  const gameChoice = readlineSync.question('Введите номер игры: ');

  switch (gameChoice) {
    case '1':
      startGame(progressionGame);
      break;
    case '2':
      startGame(lcmGame);
      break;
    default:
      console.log('Неверный выбор');
      break;
  }
};

selectGame();
