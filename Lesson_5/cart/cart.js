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
		"name": "Шляпа",
		"count": "1",
		"price": "34534535",
	},
	'art345': {
		"name": "Зонт",
		"count": "2",
		"price": "456456456",
	},
	{
	'art567': {
		"name": "Туфли",
		"count": "3",
		"price": "456456",
	},
	'art6789': {
		"name": "Костюм",
		"count": "4",
		"price": "45646",
	},
	{
	'art145456': {
		"name": "Платок",
		"count": "5",
		"price": "456456",
	},
	'art345345': {
		"name": "Носки",
		"count": "6",
		"price": "456456",
	},
	{
	'art145785': {
		"name": "Портфель",
		"count": "7",
		"price": "45634535",
	},
	'art345234': {
		"name": "Запанки",
		"count": "8",
		"price": "457647",
	},
	{
	'art143455': {
		"name": "Галстук",
		"count": "9",
		"price": "456477",
	}
}

// let full_price_basket = basket.reduce(function countBasketPrice(acc, elem) {
// 	return {sum: acc.sum + elem.price}
// }, {sum: 0});

// console.log(full_price_basket)

// Тригер для отловки события 
document.onclick = event => {
	if (event.target.classlist.contains('тут на что событие кнопка плюс')) {
		plusFunction(event.target.datatest.id);
	}
	if (event.target.classlist.contains('тут на что событие кнопка минус')) {
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
// отрисовка корзины
const renderBasket = () => {
	console.log(basket);
	}

	renderBasket();