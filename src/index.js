/**
 * Реализуйте функцию sumOfOther,
 *  которая возвращает массив, в котором каждый элемент по индексу i - это сумма остальных элементов оригинального массива.
 */

function sumOfOther(array) {
  const newArray = array.map((value) => array.reduce((acc, current) => acc + current) - value);
  return newArray;
}

/**
 * Реализовать функцию make, которая запоминает аргументы и после выполняет операцию над ними
 */
function make(...args) {
  //Возвращаем функцию с аргументами
  return function (...result) {

    // Если аргумент - функция, то выполняем ее и возвращаем результат
    if (typeof result[0] === 'function') {
      return args[0].reduce(result[0], 0);
    }
    // Проверка на одиночный аргумент или множество аргументов
    if (Array.isArray(args[0])) {
      args[0].push(...result);
      return make(args[0]);
    }
    args.push(...result);
    return make(args);
  }
}
