//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];


    function wrapper(...args) {
        const hash = md5(JSON.stringify(args)); // получаем правильный хеш с помощью функции md5
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { // если элемент найден
          console.log("Из кэша: " + objectInCache.value); // выводим значение из кеша
          return "Из кэша: " + objectInCache.value; // возвращаем значение из кеша
        }
    
        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push({ hash, value: result }); // добавляем объект в кеш
        if (cache.length > 5) {
          cache.shift(); // если слишком много элементов в кеше, удаляем самый старый (первый)
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result; // возвращаем результат вычислений
      }
      return wrapper;
    }









  


//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    if (timeoutId === null) {
      console.log(func.call(this, ...args));
      console.log("вызвали first колбек");
      wrapper.count++;
    }
    if (timeoutId) {
      console.log("удалили текущий таймаут");
      clearTimeout(timeoutId);
    }
    console.log("создаем новый таймаут");
    timeoutId = setTimeout(
      () => {
        timeoutId = true;
        console.log(func(...args));
        wrapper.count++;
        console.log("вызвали колбек");
      },
      delay,
      wrapper.allCount++
    );
    // return function (...args) {
    // }
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
  
}
