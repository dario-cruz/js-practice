const container = document.querySelector('#container');
const pContent = document.createElement('p');
const h3Content = document.createElement('h3');

// Setting the content, class, and color of the p element to be added. 
pContent.classList.add('pContent');
pContent.style.color = "red";
pContent.textContent = "Hey I'm red!";

container.appendChild(pContent);

//Styling, adding content to, and appending h3 to the DOM.
h3Content.style.color = "blue";
h3Content.textContent = "I'm a blue h3!";
container.appendChild(h3Content);

const divCreate = document.createElement('div');
const divH1 = document.createElement('h1');
const divP = document.createElement ('p');

divCreate.style.borderWidth = "thick";
divCreate.style.borderColor = "black";
divCreate.style.backgroundColor = "pink";

divH1.textContent = "I'm in a div.";
divP.textContent = "Me TOO!";

divCreate.appendChild(divH1);
divCreate.appendChild(divP);

container.appendChild(divCreate);

// Event listener Method 2
const btn2 = document.querySelector('#btn2');
btn.onclick = () => alert("Hello World");

// Event Listener Method 3
const btn3 = document.querySelector('#btn3');
btn.addEventListener('click', () => {
    alert("Hello World");
})