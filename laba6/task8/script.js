let bar = document.getElementById('bar')
let percent = document.getElementById('percent')
let p = document.getElementById('end')
let but = document.getElementById('button')
function progress() {
	percent.textContent = percent.innerHTML * 1 + 10
	bar.value += 10
	if (bar.value == 100) {
		end.textContent = '100%. Максимум.'
		but.hidden = true
	}
}
