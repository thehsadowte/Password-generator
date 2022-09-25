const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const numberEl = document.getElementById('number');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
      numbers = '0123456789';
      symbols = '!@#$%^&*()_+=';

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]; 
}

function getNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(){
    const len = lenEl.value;

    let password = '';

    if(upperEl.checked){
        password += (getUpperCase());
    }
    if(lowerEl.checked){
        password += (getLowerCase());

    }if(numberEl.checked){
        password += (getNumbers());

    }if(symbolEl.checked){
        password += (getSymbols());
    }

    for(let i = password.length; i < len; i++){
        const x = generateX();
        password += x;
    }
    pwEl.innerText = password;
}
function generateX(){
    const xs = [];
    if(upperEl.checked){
        xs.push(getUpperCase());
    }
    if(lowerEl.checked){
        xs.push(getLowerCase());

    }if(numberEl.checked){
        xs.push(getNumbers());

    }if(symbolEl.checked){
        xs.push(getSymbols());
    }
    if(xs.length === 0) return'';

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    let password = pwEl.innerText;

    if(!password){
        return;
    }
textArea.value = password;
document.body.appendChild(textArea);
textArea.select();


document.execCommand('copy');
textArea.remove();
alert('Password has been copied to clipboard');
});

document

