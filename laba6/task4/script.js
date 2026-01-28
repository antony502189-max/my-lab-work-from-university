function fun() {
	let first = Number(document.getElementById('1').value)
	let second = Number(document.getElementById('2').value)
	let answer = first + second
	document.getElementById('answer').textContent = answer
}
