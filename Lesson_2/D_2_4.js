// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = Math.floor(Math.random()*16 + 0);

function mathOperation(a) {
	// body...
	let x = "";
	switch(a){
		case 0:
			x = 'Ноль';
			break;
		case 1:
			x = 'Один';
			break;
		case 2:
			x = 'Два';
			break;
		case 3:
			x = 'Три';
			break;
		case 4:
			x = 'Четыре';
			break;
		case 5:
			x = 'Пять';
			break;
		case 6:
			x = 'Шесть';
			break;
		case 7:
			x = 'Семь';
			break;
		case 8:
			x = 'Восемь';
			break;
		case 9:
			x = 'Девять';
			break;
		case 10:
			x = 'Десять';
			break;
		case 11:
			x = 'Одиннадцать';
			break;
		case 12:
			x = 'Двеннадцать';
			break;
		case 13:
			x = 'Тринадцать';
			break;
		case 14:
			x = 'Четырнадцать';
			break;
		case 15:
			x = 'Пятьнадцать';
			break;
	}		
	return ['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять', 'Десять', 'Одиннадцать', 'Двеннадцать', 'Тринадцать', 'Четырнадцать', 'Пятьнадцать'][a];
	}
console.log(mathOperation(a));
