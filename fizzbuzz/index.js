'use strict';

//calculate fizz=multiples of 3 buzz=multiples of 5 fizzbuzz=multiples of 3 and 5
console.log('hello');
function fizzbuzz (num) {
  if(!Number(num))return num;
  return (num%3===0 && num%5===0)?'fizzbuzz' : num%3===0?'fizz': num%5===0?'buzz':Number(num)
}
console.log(fizzbuzz(0));
$('form').on('submit', e=>{
  e.preventDefault();
  let usrNum = $('input:input').val();
  let arr = [...Array(Number(usrNum)+1).keys()].map(x=>fizzbuzz(x));
  console.log(arr);
  let divclass =  '';
  $('div.js-results').html('');
  arr.forEach(i=>{
    divclass = typeof i === 'number'?'': ' '+i;

    $('div.js-results').append(`<div class="fizz-buzz-item${divclass}">
  <span>${i}</span>
</div>`);});
}
);

