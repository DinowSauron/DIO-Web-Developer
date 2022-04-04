function validaArrays(arr, num) {
	try {
		if (!arr && !num) 
      throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Object!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else if (e instanceof TypeError) {
			console.log('TypeError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}

    return [];
	}
}

console.log(validaArrays([1, 2, 3], 2));

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error