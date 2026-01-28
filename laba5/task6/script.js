// Квадрат числа ===
function fun1(a) {
    return a * a
}

function task1() {
    while (true) {
        let input = prompt('Введите число (для квадрата)')
        if (input === null || input.trim() === '') {
            if (confirm('Вы ничего не ввели. Попробовать снова?')) continue
            else return
        }
        let num = (input.trim())
        if (isNaN(num)) {
            if (confirm(`Ошибка: "${input.trim()}" — не число!\nПопробовать снова?`)) continue
            else return
        }
        alert(`Квадрат числа: ${fun1(num)}`)
        break
    }
}

// Сумма двух чисел ===
function fun2(b, c) {
    return Number(b) + Number(c)
}

function task2() {
    while (true) {
        let b = prompt('Введите первое число (для суммы)')
        if (b === null || b.trim() === '') {
            if (confirm('Первое число не введено. Попробовать снова?')) continue
            else return
        }
        let c = prompt('Введите второе число (для суммы)')
        if (c === null || c.trim() === '') {
            if (confirm('Второе число не введено. Попробовать снова?')) continue
            else return
        }
        let num1 = (b.trim()), num2 = (c.trim())
        if (isNaN(num1) || isNaN(num2)) {
        let err = isNaN(num1) ? b.trim()
        : c.trim();
            if (confirm(`Ошибка: ${err} — не число!\nПопробовать снова?`)) continue
            else return
        }
        alert(`Сумма: ${fun2(num1, num2)}`)
        break
    }
}

//  (d - e) / f ===
function fun3(d, e, f) {
    return (Number(d) - Number(e)) / Number(f)
}

function task3() {
    while (true) {
        let d = prompt('Введите d')
        let e = prompt('Введите e')
        let f = prompt('Введите f (делитель ≠ 0)')

        if (!d || !e || !f || d.trim() === '' || e.trim() === '' || f.trim() === '') {
            if (confirm('Одно из чисел пустое. Попробовать снова?')) continue
            else return
        }

        let nd = (d.trim()), ne = (e.trim()), nf = (f.trim())

        if (isNaN(nd) || isNaN(ne) || isNaN(nf)) {
            let err = isNaN(nd) ? d.trim() 
            : isNaN(ne) ? e.trim() 
            : f.trim()
            if (confirm(`Ошибка: "${err}" — не число!\nПопробовать снова?`)) continue
            else return
        }

        if (nf === 0) {
            if (confirm('Ошибка: деление на ноль!\nПопробовать снова?')) continue
            else return
        }

        alert(`Результат: ${fun3(nd, ne, nf)}`)
        break
    }
}

//  День недели по номеру ===
function fun4(day) {
    let obj = {
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресенье'
    }
    return obj[day] 
}

function task4() {
    while (true) {
        let input = prompt('Введите число от 1 до 7 (день недели)')
        if (input === null || input.trim() === '') {
            if (confirm('Вы ничего не ввели. Попробовать снова?')) continue
            else return
        }
        let day = (input.trim())
        if (isNaN(day) || day < 1 || day > 7) {
            if (confirm(`Ошибка: "${input.trim()}" — неверный номер дня!\nДолжно быть от 1 до 7.\nПопробовать снова?`)) continue
            else return
        }
        alert(`День недели: ${fun4(day)}`)
        break
    }
}


task1()
task2()
task3()
task4()