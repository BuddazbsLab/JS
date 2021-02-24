// let basket = [
// 		{name: 'Шляпа', count: 10, price; 234234234},
// 		{name: 'Зонт', count: 5, price; 234234234},
// 		{name: 'Туфли', count: 4, price; 234234234},
// 		{name: 'Костюм', count: 7, price; 234234234},
// 		{name: 'Платок', count: 5, price; 234234234},
// 		{name: 'Носки', count: 4, price; 234234234},
// 		{name: 'Портфель', count: 3, price; 234234234},
// 		{name: 'Запанки', count: 4, price; 234234234},
// 		{name: 'Галстук', count: 5, price; 234234234},
// ];

let basket = {
	'art145': {
		"name": "Logitech ergo K860",
		"count": " ",
		"price": "14000",
	},
	'art345': {
		"name": "Logitech mx master 3",
		"count": " ",
		"price": "8000",
	}
}

let full_price_basket = basket.reduce(function countBasketPrice(acc, elem) {
	return {sum: acc.sum + elem.price}
}, 
	{sum: 0}
);

// console.log(full_price_basket)

// Тригер для отловки события 
document.onclick = event => {
	if (event.target.classlist.contains('тут на что событие')) {
		plusFunction(event.target.datatest.id);
	}
	if (event.target.classlist.contains('тут на что событие')) {
		minusFunction(event.target.datatest.id);
}

// Увлечение количества товара
const plusFunction = id => {
	basket[id]['count']++;
	renderBasket();
}
// Уменьшение количества товара
const minusFunction = id => {
	if (basket[id]['count']-1 == 0) {
		deleteFunction(id);
		return true;
	}
	basket[id]--;
	renderBasket();
}

// Удаление товара
const deleteFunction = id => {
	delete basket[id]['count'];
	renderBasket();
}

const renderBasket = () => {
	console.log(basket);
	}

	renderBasket();