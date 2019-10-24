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
  let usrNum = fizzbuzz($('input:input').val());
  let divclass = typeof usrNum === 'number'?'': ' '+usrNum;
  $('div.js-results').append(`<div class="fizz-buzz-item${divclass}">
  <span>${usrNum}</span>
</div>`);
}
);
//add attribute to fizz and buzz or fizzbuzz items
//add inner html
