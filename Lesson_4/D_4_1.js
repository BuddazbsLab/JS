// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо 
// получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
// десятки и сотни. Например, для числа 245 надо получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо 
// выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. 
function Converter(num){
  if (isNaN(num)){
    console.log('Error: the parameter is not a number');
  } else if(num>999 || num<0){
    console.log('Error: acceptable range 0-999');
    var obj={};
    return obj;
  } else {
    var digits=['units','dozens','hundreds'];
    var obj={};
    var i=0;
    for(var i=0; num!=0; i++){
      obj[digits[i]]=num%10;
      num=(num-num%10)/10;
    }
    } 
    return obj;
  }
console.log(Converter(Math.floor(Math.random()*1000 + 0)));