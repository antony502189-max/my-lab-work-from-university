let button = document.getElementById('button')
let ship = document.getElementById('ship')
let sail1 = document.getElementById('sail-1')
let sail2 = document.getElementById('sail-2')
let shipInner = document.getElementById('ship-inner-details')

button.addEventListener('click', animate)

function animate() {
	button.addEventListener('click', reset)
	button.classList.add('button_anim')
	ship.classList.add('ship_anim')
	sail1.classList.add('sail1_anim')
	sail2.classList.add('sail2_anim')
	shipInner.classList.add('shipInner_anim')
	button.innerHTML = 'Поплыли!'
}

function reset() {
	button.removeEventListener('click', reset)
	button.classList.remove('button_anim')
	ship.classList.remove('ship_anim')
	sail1.classList.remove('sail1_anim')
	sail2.classList.remove('sail2_anim')
	shipInner.classList.remove('shipInner_anim')
	button.innerHTML = 'Отправить в работу'
}
