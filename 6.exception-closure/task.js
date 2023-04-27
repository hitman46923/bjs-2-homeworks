 function parseCount (value) {
  let result = Number.parseFloat(value);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  } else {
    return result;
  }
  }
 
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
 
  }
 
 
 
 
  class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
 
    get perimeter() {
      let per = (this.a + this.b + this.c);
      return per;
    }
 
    get area() {
      let p = (this.a + this.b + this.c) / 2;
      let ar = Math.round(1000 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) + Number.EPSILON) / 1000;
      return ar;
    }
  }
 
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (e) {
      return {
        get area() {
          return 'Ошибка! Треугольник не существует';
        },
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
      };
    }
  }