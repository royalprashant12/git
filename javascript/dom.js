document.getElementById('titel')
// <h1 class="heading" id="title">DOM learning </h1>

// method1
document.getElementById('title').id
document.getElementById('title').className

// method2
document.getElementById('title').getAttribute('heading')
// pass key we get value
document.getElementById('title').setAttribute('class','test')
// in place of class class value overite to title



// 2. manipulating element
const title = document.getElementById('title')
title.style.backgroundColor='green'

// 3 differnece b/w innertext,textcontent,innerhtml

// <h1 class="heading" id="title">DOM learning <span style="display: none;"> test text</span> </h1>

title.textContent
// 'DOM learning  test text '

title.innerHTML
// 'DOM learning <span style="display: none;"> test text</span> '

title.innerText
// 'DOM learning'


// 4 query selector
document.querySelector('h1')
document.querySelector('#title')
document.querySelector('.heading')

//  after we get proyoyle if we seen looking like node is similar as array nut list is differnet 
// NodeList(4) [ul, ul, ul, ul]
document.querySelectorAll('ul').forEach(function(ul) {
    ul.style.backgroundColor = 'green';
  });
  
// 5.HTMLCollection
document.getElementsByClassName('heading')
// this is html collection you cant use directly for each loop first you have to convert into array
const temp1 = Array.from(document.getElementsByClassName('heading'))

