let salary = Number(prompt('Введите свою зарплату'))
salary += salary * 0.15
alert('Премия 15% на руки: ' + salary)
salary -= salary * 0.1
alert('Налоги 10% на руки: ' + salary)
salary -= 90
if (salary>0){
  alert('Остаток после покупок: ' + salary)
	salary /= 2
	alert('Жене половину отдал и Осталось: ' + salary)
}
else{
  alert('Ты и жена умерли с голода :(')
}

