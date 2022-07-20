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
btn2.onclick = () => alert("Hello World");

// Event Listener Method 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("Hello World");
});
 
// Named functions can be used with event listeners. 
// Below is an example of a function being called.
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', alertFunction);
function alertFunction() {
    alert("This is an alert from\nthe alertFunction!");
}


// Code for 3rd div in html.
// Contains 3 buttons that we are going to iterate throuh.
// We are going to use the selector querySelecterAll.

// const div3 = document.querySelector('#containter3');
const div3Buttons = document.querySelectorAll("button.c3b1, button.c3b2, button.c3b3");
div3Buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});