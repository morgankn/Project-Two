const elem = document.querySelectorAll('[datas2 = "display"]');
let j = 1;
for (let i = 0; i < elem.length; i++) {
  // set id value
  elem[i].id = `value${j}`;
  console.log(elem[i].id);
  j++;
}

// elem.addEventListener('click', () => {

// })

    
