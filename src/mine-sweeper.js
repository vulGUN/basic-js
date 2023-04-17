const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  // Итерация по строкам
  for (let i = 0; i < matrix.length; i++) {
    const row = [];

    // Итерация по столбцам
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;

      // Перебор соседей
      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          if (i + k >= 0 && i + k < matrix.length && j + l >= 0 && j + l < matrix[i].length && matrix[i + k][j + l]) {
            count++;
          }
        }
      }

      // Вычитаем одну мину, если текущая ячейка содержит мину
      if (matrix[i][j]) {
        count--;
      }

      row.push(count);
    }

    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper,
};
