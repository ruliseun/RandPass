

let values = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', ',', '.', '/', '<', '>'
]

let displayBoxOne = document.getElementById('display-1')
let displayBoxTwo = document.getElementById('display-2')
let displayBoxThree = document.getElementById('display-3')
let displayBoxFour = document.getElementById('display-4')



function getPassword(){

    let output = '';
    let password = '';
    let password2 = '';
    let password3 = '';
    let password4 = '';
    let passwordLength = 7;

    for (let i = 0; i < passwordLength; i++){

        output = Math.floor(Math.random() * values.length);
        password += values[output];
        
        
        displayBoxOne.value = password
    }

    for (let j = 0; j < passwordLength; j++){

        output = Math.floor(Math.random() * values.length);
        password2 += values[output];
        
        
        displayBoxTwo.value = password2
    }

    for (let k = 0; k < passwordLength; k++){

        output = Math.floor(Math.random() * values.length);
        password3 += values[output];
        
        
        displayBoxThree.value = password3
    }

    for (let l = 0; l < passwordLength; l++){

        output = Math.floor(Math.random() * values.length);
        password4 += values[output];
        
        
        displayBoxFour.value = password4
    }     

}

function copyPassword1(){
        
    let copyText = document.getElementById('display-1')
    copyText.select();
    document.execCommand('copy', true,)

    return alert('Copied to clipboard')
}

function copyPassword2(){
        
    let copyText = document.getElementById('display-2')
    copyText.select();
    document.execCommand('copy', true,)

    return alert('Copied to clipboard')
}

function copyPassword3(){
        
    let copyText = document.getElementById('display-3')
    copyText.select();
    document.execCommand('copy', true,)

    return alert('Copied to clipboard')
}

function copyPassword4(){
        
    let copyText = document.getElementById('display-4')
    copyText.select();
    document.execCommand('copy', true,)

    return alert('Copied to clipboard')
}


//console.log(getPassword())
    