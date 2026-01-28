function fun1(a, b) {
	if (a === b) {
		return true
	} else {
		return false
	}
}
let a = prompt('Введите число a')
let b = prompt('Введите число b')
alert(fun1(a, b))
//
function fun2(a, b) {
	if (Number(a) + Number(b) > 10) {
		return true
	} else {
		return false
	}
}
let c = prompt('Введите число c')
let d = prompt('Введите число d')
alert(fun2(c, d))
//
function fun3(a) {
	if (Number(a) < 0) {
		return true
	} else {
		return false
	}
}
let e = prompt('Введите число e')
alert(fun3(e))
