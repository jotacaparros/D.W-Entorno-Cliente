let p3 = document.querySelectorAll('p')[2];
let a = document.createElement('a');
a.textContent = ' + info';

a.href = 'https://www.igformacion.com';

p3.appendChild(a);
let p4 = document.querySelectorAll('p')[3];
let p35 = document.createElement('p');
p35.textContent = 'nuevo parrafo';

p35.style.color = 'red';

p4.parentNode.insertBefore(p35, p4);