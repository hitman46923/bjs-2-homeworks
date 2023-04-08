"use strict"
function solveEquation(a, b, c) {


let d =  b ** 2 - 4 * a * c;
let arr = [];
  if (d < 0) {
      return arr ;

  } else if (d == 0) {
      let root = -b/(2 *a );
        arr.push(root);



  } else {
    let  root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push (root1, root2);

  }




  return arr;
 
  
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {


  if (typeof percent !== 'number' || isNaN(percent) || percent < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (typeof contribution !== 'number' || isNaN(contribution) || contribution < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (typeof amount !== 'number' || isNaN(amount) || amount < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  if (typeof countMonths !== 'number' || isNaN(countMonths) || countMonths < 0 || countMonths % 1 !== 0) {
    return `Параметр "Количество месяцев" содержит неправильное значение "${countMonths}"`;
  }

  const monthlyInterest = percent / 100 / 12;
  const loanBody = amount - contribution;
  const annuityRate = monthlyInterest + monthlyInterest / ((1 + monthlyInterest) ** countMonths - 1);
  const monthlyPayment = loanBody * annuityRate;
  const totalPayment = (monthlyPayment * countMonths).toFixed(2);

  return Number(totalPayment);








  
}