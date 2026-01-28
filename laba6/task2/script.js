function fun() {
	let element = document.querySelectorAll('.pr')
	for (let i = 0; i < element.length; i++) {
		element[i].style.backgroundColor = 'red'
	}
}
