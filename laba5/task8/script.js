let numbers = (a, b) => //function numbers(a, b) { ... } можно так еще запсиать стрелочную функцию
	Number(a) > Number(b) ? '1' 
	: Number(a) < Number(b) ? '-1' 
	: '0'
let a = prompt('Введите число')
let b = prompt('Введите число')
alert(numbers(a, b))
