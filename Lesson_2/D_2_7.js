// * Сравнить null и 0. Объяснить результат.
var a = null, b = 0, c,

c = a > b; console.log(c); // false
c = a < b; console.log(c); // false
c = a >= b; console.log(c); // true
c = a <= b; console.log(c); // true
c = a == b; console.log(c); // false
c = a != b; console.log(c); // true

// Отдельный интересный блок 
//null > 0; // false
//null == 0; // false
//null >= 0; // true