// * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {
	// body...
	if (pow == 1) {
		return val;
	}
	return val * power(val, pow - 1);
}

console.log(power(2, 10));