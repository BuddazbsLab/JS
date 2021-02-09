// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = Math.floor(Math.random()*16 + 0);

function mathOperation(a) {
	// body...
	switch(a){
		case 0:
			console.log('Zero - 0');
			
		case 1:
			console.log('One - 1');
			
		case 2:
			console.log('Two - 2');
			
		case 3:
			console.log('Three - 3');
			
		case 4:
			console.log('Four - 4');
			
		case 5:
			console.log('Five - 5');
			
		case 6:
			console.log('Six - 6');
			
		case 7:
			console.log('Seven - 7');
			
		case 8:
			console.log('Eight - 8');
			
		case 9:
			console.log('Nine - 9');
			
		case 10:
			console.log('Ten - 10');
			
		case 11:
			console.log('Eleven - 11');
			
		case 12:
			console.log('Twelve - 12');
			
		case 13:
			console.log('Thirteen - 13');
			
		case 14:
			console.log('Fourteen - 14');
			
		case 15:
			console.log('Fifteen - 15');
			break;
	}		
	
	}
console.log(mathOperation(a));
