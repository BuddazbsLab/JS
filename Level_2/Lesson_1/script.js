// class ApiBasket {
//     constructor() {

//     }

//     fetch() {
//       return [
//            { title: 'Шорты', price: 150, src:'content/1.png',},
//            { title: 'Носки', price: 500, src:'content/2.png',},
//            { title: 'Жилет', price: 350, src:'content/3.png',},
//            { title: 'Обувь', price: 250, src:'content/4.png'}
//         ];
//     }
// }




class Api {
	constructor() {
		this.url = 'goods.json'
	}

	fetch(error, success) {
		let xhr;


  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
     if (xhr.status === 200) {
    	success(JSON.parse(xhr.responseText));
    } else if (xhr.status > 400) {
    	error();
    }
}
}

  xhr.open('GET', this.url, true);
  xhr.send();
}
}

// Класс товара
class GoodsItem {
    constructor(title, price, src) {
      this.title = title;
      this.price = price;
      this.src = src;
    }

    getSceletonHtml() {
      return `<div class="goods-item">
      <h3>${this.title}</h3>
      <p>${this.price} руб.</p>
      <img class="images_box" src=${this.src} height="200px" alt="">
      <button>В корзину</button>
      </div>`;
    }
}
// Класс списка товаров
class GoodsList {
    constructor() {
    	this.api = new Api();
      	this.$goodsList = document.querySelector('.goods-list');
        this.goods = [];
    }
    // Для функции сделал необходимым данный аргумент, чтобы можно было менять его значение извне
    // fetchGoods(url) {
    //     makeGETRequest(url, (goods) => {
    //         this.goods = JSON.parse(goods);
    //         this.render();
    //         this.calcAllGoods();
    //     })
    // }
    // render() {
    //     let listHtml = '';
    //     this.goods.forEach((goods) => {
    //         const goodsItem = new GoodItem(goods.id, goods.title, goods.price, goods.img);
    //         listHtml += goodsItem.render();
    //     })
    //     document.querySelector('.goods-list').innerHTML = listHtml;
    // }
    fetchGoods() {
      this.goods = this.api.fetch().map(({title, price, src}) => new GoodsItem(title, price, src));
    }

    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
            }
        });
        let totalGoodsAnswer = "Итого на сумму руб." + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
    }
}





// Класс корзины
class Basket {
    constructor() {
        this.cartGoods = [];
    }
    // Добавление товара в корзину (привязываем на нажатие кнопки)
    addToBasket(id) {
        let toBasket;
        list.goods.forEach(function(item) {
            if(id == item.id) {
                toBasket = {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    img: item.img
                }
            }
        });
        this.cartGoods.push(toBasket);
        this.basketCount();
    }

    // Удаление товара из корзины (привязываем на нажатие кнопки)
    deleteFromBasket(id) {
        let getIdElemen;
        this.cartGoods.forEach(function(item, i) {
            let thisId = item.id;
            if(id == thisId) {
                getIdElemen = i;
            }
            
        });
        this.cartGoods.splice(getIdElemen, 1);
        this.render();
        this.basketCount();
    }

    // Считаем стоимость товаров в корзине
    calcAllGoods() {
        let totalPrice = 0;
        this.cartGoods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
            }
        });
        let totalGoodsAnswer = "Итого на сумму руб." + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
    }

    // Считаем количество товаров в корзине и выводим на кнопку
    // basketCount() {
    //     let count = this.cartGoods.length;
    //     document.getElementById('cartcoint').innerHTML = ' (' + count + ')';
    // }

    // Рендер динамического содержимого корзины
    render() {
        let readHtml = '';
        this.cartGoods.forEach((good) => {
            const goodItem = new BasketItem(goods.id, goods.title, goods.price, goods.img);
            readHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = readHtml;
        this.calcAllGoods();
    }
}

const goodsList = new GoodsList();
const cart = new Basket();
// goodsList.fetchGoods('data.json');

