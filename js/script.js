const listaSpesa = [
  "zucchine",
  "broccoli",
  "peperoni",
  "riso",
  "yogurt",
  "pollo",
  "tacchino"
];

const body = document.querySelector('body');
const ul = document.createElement('ul');
body.append(ul);


/*FOR
for(let i=0; i<listaSpesa.length; i++){
  let li = document.createElement('li');
  ul.append(li);
  li.innerHTML = listaSpesa[i];
}*/

/*WHILE*/
c=0;
while(c<listaSpesa.length){
  let li = document.createElement('li');
  ul.append(li);
  li.innerHTML = listaSpesa[c];
  c++
}
