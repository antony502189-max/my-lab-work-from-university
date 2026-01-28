function calculateProduct() {
    let input = prompt('Введите числа через запятую (например: 5, 6, 7, 8)')
    if (!input || input.trim() === '') {
        alert('Ошибка: вы ничего не ввели или отменили ввод!')
        return
    }
    let arr = input
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '')
        
    if (arr.length === 0) {
        alert('Ошибка: нет валидных чисел! Проверьте ввод.')
        return
    }

    let originalParts = input.split(',').map(s => s.trim())  

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            alert(`Ошибка: "${originalParts[i]}" — не число!`)
            return
        }
    }
    let s = 1
    for (let i = 0; i < arr.length; i++) {
        s *= arr[i]
    }
    alert(`Произведение: ${s}`)
}
calculateProduct()

function showCapitals() {
    let vvod = prompt('Введите города и страны через запятую\nФормат: Город:Страна, Город:Страна\nПример: Минск:Беларусь, Москва:Россия, Киев:Украина')
    if (!vvod || vvod.trim() === '') {
        alert('Ошибка: вы ничего не ввели!')
        return
    }
    let pairs = vvod
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '')
    let obj = {}
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i]
        if (!pair.includes(':')) {
            alert(`Ошибка в элементе ${i + 1}: "${pair}" — нет двоеточия!\nФормат: Город:Страна`)
            return
        }
        let [city, country] = pair.split(':').map(s => s.trim())
        if (city === '' || country === '') {
            alert(`Ошибка в элементе ${i + 1}: "${pair}" — город или страна пустые!`)
            return
        }
        obj[city] = country
    }
    
    for (let [city, country] of Object.entries(obj)) {
        alert(`${city} — столица ${country}`)
    }
}

showCapitals()