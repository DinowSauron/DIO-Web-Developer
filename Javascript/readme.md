# Javascript



* Map
  * Não modifica o array original
  * retorna um novo array
  * array.map(callback, thisArg)
    * callback(item, index, array) 
    * thisArg > (opcional) 
* Reduce
  * Executa uma função em todos os elementos e retorna apenas um valor 
  * array.reduce(callback, initialValue)
    * callback(accumulator, currentVal, index, array) 
    * initialValue > (Opcional) valor inicial do acumulador
    * accumulador > vai acumulando os valores enquando itera nos itens
* DOM / BOM
  * DOM (Document Object Model) > Html, Css, Js
  * BOM (Browser Object Model) > é os componentes do browser, nele se encontra o DOM.
    * Execute-o com o ``Window`` como '``window.location``' faz parte do BOM