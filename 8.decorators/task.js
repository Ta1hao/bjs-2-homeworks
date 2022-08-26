function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(','); 
      let objectInCache = cache.find((item) => item == hash); 
      let result = cache[objectInCache];
      if (!objectInCache) { 
        cache.push(hash) ; 
        cache[hash] = result = func.call(this, ...args);
        if (cache.length > 5) { 
         cache.splice(0,1) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;   
      } else{
  
        console.log("Из кэша: " + result); 
        return "Из кэша: " + result; 
    }
  }
  return wrapper;
  }


  function debounceDecoratorNew(func, ms) {
    let timerId;
    function wrapperSend(...args){
      clearTimeout(timerId);
      if(wrapperSend.history === undefined){
          wrapperSend.history = [1];
          setTimeout(() => {
            return func.call()
          },0) 
      }
      else {
          timerId = setTimeout(() => {
            return func.call()
          },ms)
      }
    }
    return wrapperSend;
  }

  
function debounceDecorator2(func, ms) {
    let timerId;
    function wrapperSend(...args){
        clearTimeout(timerId);
        if(wrapperSend.count === undefined){
            wrapperSend.count = 1;
            setTimeout(() => {
                return func.call()
            },0) 
            }
        else {
            wrapperSend.count ++;
            timerId = setTimeout(() => {
                return func.call()
            },ms)
        }
    }
    return wrapperSend;
}