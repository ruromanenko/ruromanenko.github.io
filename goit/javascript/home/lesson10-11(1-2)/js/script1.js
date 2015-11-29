
var x = prompt('Введите основание степени. x = ');
var n = prompt('Введите показатель степени. n = ');

console.log(x + '^' + n + ' = ' + pow(x, n) );
alert(x + '^' + n + ' = ' + pow(x, n) );

/*
 *  Возвращает x в степени n, только для целых n  
 * @param {number} x Число для возведения в степень.
 * @param {number} n Показатель степени, натуральное число.
 * @return {number} x в степени n или false - если показатель степени не целый
 */
function pow(x, n) {

  if (n % 1 != 0)
	return false;
	
  var result = 1;

  for (var i = 0; i < Math.abs(n); i++) {
    result *= x;
  }
  
  if (n < 0) {
    return 1/result;
  } else {
    return result;
  }
  
}