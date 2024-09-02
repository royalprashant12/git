# project  related to dom

#project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-lqh6bp?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)


#solution code

#project 1:


``` javascript

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((element) => {
  element.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if(e.target.id=='grey'){
      body.style.background='grey';
    }
    else if(e.target.id=='white'){
      body.style.background='white';
    }
    else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

