let time = Number(prompt('Время от 0 до 59')) //можно вместо намбер умножить на 1

if (time >= 0 && time <= 14) {
    alert('1 четверть')
} else if (time >= 15 && time <= 29) {
    alert('2 четверть')
} else if (time >= 30 && time <= 44) {
    alert('3 четверть')
} else if (time >= 45 && time <= 59) {
    alert('4 четверть')
} else {
    alert('Некорректное значение!')
}

let lang = prompt('ru or by? ').trim().toLowerCase()
let week

switch (lang) {
    case 'ru':
        week = 'Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье'
        break
    case 'by':
        week = 'Панядзелак Аўторак Серада Чацвер Пятніца Субота Нядзеля'
        break
    default:
        week = 'Неизвестный язык!'
}

alert(week)
