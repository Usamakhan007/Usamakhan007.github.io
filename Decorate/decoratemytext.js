window.onload = function () {
   'use strict';
   alert("Hello, world!");


   const btnClick = function () {
    if(interval){
        clearInterval(interval);
        interval = 0;
    } else {
        interval = setInterval(textEnlarge, 500);
    }
};

const textEnlarge = function () {
    var size = 0;
    var textbox = document.getElementById('textarea');
    if (textbox.style.fontSize == '') {
        size = 12;
    } else {
        size = parseInt(textbox.style.fontSize);
    }
    textbox.style.fontSize = size + 2 + 'px';
};

var interval;

var btn = document.getElementById('button');
btn.onclick = btnClick;

var checkbox = document.getElementById('checkbox');
checkbox.onchange = function () {
    var textbox = document.getElementById('textarea');
    if (checkbox.checked) {
        textbox.style.fontWeight = 'bold';
        textbox.style.color = 'green';
        textbox.style.textDecoration = 'underline';
        document.body.style.backgroundImage = 'url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg")';
    } else {
        textbox.style.fontWeight = 'normal';
        textbox.style.color = '';
        textbox.style.textDecoration = '';
        document.body.style.backgroundImage = '';
    }
};

document.getElementById('btni').onclick = function () {
  var textbox = document.getElementById('textarea');
  var arr = textbox.value.split(' ');
  var arr1 = textbox.value.split(' ');

  arr = arr.filter((a)=>isVowel(a.charAt(0)));
  arr = arr.map((a)=>a.substring(1)+a.charAt(0)+'ay ');

  arr1 = arr1.filter((a)=>!isVowel(a.charAt(0)));
  arr1 = arr1.map((a)=>a+'ay ');

  arr = arr.join(' ');
  arr1 = arr1.join(' ');
  var finalArr = arr.concat(arr1);
  textbox.value = finalArr;
};
document.getElementById('btnm').onclick = function () {
   var textbox = document.getElementById('textarea');
   var arr = textbox.value.split(' ');
   textbox.value = arr.filter((a)=>a.length >= 5).map((a,i,array)=>{return "Malkovitch"}).join(' ');
};
}
/* takes one char and returns true or false whether this char is vowel*/
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
