// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ]; 

// const $goodsList = document.querySelector('.goods-list');

// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button>В корзину</button></div>`;
// };

// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//             item => renderGoodsItem(item)
//         ).join('\n');

//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }

// renderGoodsList();


class ApiBasket {
    constructor() {

    }

    fetch() {
      return [
           { title: 'Шорты', price: 150, src:'content/1.png',},
           { title: 'Носки', price: 500, src:'content/2.png',},
           { title: 'Жилет', price: 350, src:'content/3.png',},
           { title: 'Обувь', price: 250, src:'content/4.png'}
        ];
    }
}

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

class GoodsList {
    constructor() {
      this.api = new ApiBasket();
      this.$goodsList = document.querySelector('.goods-list');
      this.goods = [];
    }

    fetchGoods() {
      this.goods = this.api.fetch().map(({title, price, src}) => new GoodsItem(title, price, src));
    }

        //Метод для вывода итоговой суммы корзины
    totalCartPrice() {
        let totalPrice = document.getElementById('goods-list__total'); 
        let sum = 0;
        this.goods.forEach (good => { 
            sum += good.price
        });
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }

    render() {
      this.$goodsList.textContent = '';
      this.goods.forEach((good) => {
      this.$goodsList.insertAdjacentHTML('beforeend', good.getSceletonHtml());
      })
    }
}

const goodsList = new GoodsList();

goodsList.fetchGoods();
goodsList.render();


// Класс корзины и методы работы с ней [
// добавление, удаление, редактирование
// ]