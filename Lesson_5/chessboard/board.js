// Создать функцию, генерирующую шахматную доску. 
// Можно использовать любые html-теги. Доска должна 
// быть верно реазлинована на черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, 
// столбцы — латинскими буквами A, B, C, D, E, F, G, H.

let table = document.createElement("table");            // создаем контейнер для элементов (теги html)
let letters = "ABCDEFGH";                              // создаем переменню для перебора и расстановки букв
for (let i = 0; i < 9; i++) {
  let tr = document.createElement('tr');              // создаем элемент tr (теги html)  - служит контейнером для создания строки таблицы
  for (let j = 0; j < 9; j++) {
    let td = document.createElement('td');           // создаем элемент td (теги html) - предназначен для создания одной ячейки (столбцы) таблицы
    // блок с алгоритмом расстановки цифр
    // опускаемся с верху в низ и запролняем 8 ячеек 
    if (j === 0) {
      td.textContent = 8-i || '';
      tr.appendChild(td);                           // Метод appendChild позволяет вставить в конец какого-либо другой элемент.
      continue;
    }
    // блок с алгоритмом расстановки букв
    if (i === 8) {
      td.textContent = letters.charAt(j-1);         // Метод charAt() возвращает указанный символ из строки.
      td.classList.add('letter');
      tr.appendChild(td);
      continue;
    }
    // определяем последовательность будующей закраски ячеек 
    if (i % 2 == j % 2) {
      td.className = "white";                    // классы в css красим в белый
    } else {
      td.className = "black";                   // классы в css красим в белый
    }
    tr.appendChild(td);                        // Метод appendChild позволяет вставить в конец какого-либо другой элемент.
  }
  table.appendChild(tr);                      // Метод appendChild позволяет вставить в конец какого-либо другой элемент.
}
document.body.appendChild(table);