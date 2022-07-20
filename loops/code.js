let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
const para = document.createElement('p');

while (i >= 1) {
    if (i === 10) {
        para.textContent = "Starting countdown!\n10";
        output.appendChild(para);
        i--;
    } else if (i <= 9 && i != 1) {
        para.textContent = i;
        output.appendChild(para);
        i--;
    } else {
        para.textContent = "1\nBLAST OFF!!!!";
        output.appendChild(para);
    }
}

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
