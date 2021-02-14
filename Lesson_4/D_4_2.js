// Товары в корзине хранятся в массиве. Задачи:
// Организовать такой массив для хранения товаров в корзине;
// Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


const basket = [
		{name: 'Шляпа', price: 345345},
		{name: 'Зонт', price: 5454},
		{name: 'Туфли', price: 5454},
		{name: 'Костюм', price: 54644},
		{name: 'Платок', price: 65465},
		{name: 'Носки', price: 55421},
		{name: 'Портфель', price: 4642},
		{name: 'Запанки', price: 123154},
		{name: 'Галстук', price: 545456},
];

// const Sum = (items) => items
//   .reduce((acc, { price }) => {
//     acc.priceSum += price;
//     return acc;
//   }, { priceSum: 0 });

// console.log(Sum(basket));

let full_price_basket = basket.reduce(function countBasketPrice(acc, elem) {
	// body...
	return {sum: acc.sum + elem.price}
}, {sum: 0});

console.log(full_price_basket)

