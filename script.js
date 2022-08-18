console.log("This is a tic tac toe")
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById('btn1')
b2 = document.getElementById('btn2')
b3 = document.getElementById('btn3')
b4 = document.getElementById('btn4')
b5 = document.getElementById('btn5')
b6 = document.getElementById('btn6')
b7 = document.getElementById('btn7')
b8 = document.getElementById('btn8')
b9 = document.getElementById('btn9')
let reset=document.getElementById('reset');
check();
function check() {
    btn = document.querySelectorAll('button')
    for (i of btn) {
        flag = 1;
        i.addEventListener('click', (e) => {
            if (flag == 1) {
                e.target.innerText = "X";
                e.target.disabled = true
                flag = 0;
            }
            else {
                e.target.innerText = "0";
                e.target.disabled = true
                flag = 1;
            }
            win()
        })
    }
}
function win() {
    if ((b1.innerText == 'X' && b2.innerText == 'X' && b3.innerText == 'X') || (b1.innerText == 'X' && b5.innerText == 'X' && b9.innerText == 'X') || (b1.innerText == 'X' && b4.innerText == 'X' && b7.innerText == 'X') || (b2.innerText == 'X' && b5.innerText == 'X' && b8.innerText == 'X') || (b3.innerText == 'X' && b6.innerText == 'X' && b9.innerText == 'X') || (b4.innerText == 'X' && b5.innerText == 'X' && b6.innerText == 'X') || (b7.innerText == 'X' && b8.innerText == 'X' && b9.innerText == 'X') || (b3.innerText == 'X' && b5.innerText == 'X' && b7.innerText == 'X')) {
        document.getElementById('pic').classList.remove('hide')
        document.getElementById('root').innerHTML = `<p id="win">Player X has Won</p>`
    }
    else if ((b1.innerText == '0' && b2.innerText == '0' && b3.innerText == '0') || (b1.innerText == '0' && b5.innerText == '0' && b9.innerText == '0') || (b1.innerText == '0' && b4.innerText == '0' && b7.innerText == '0') || (b2.innerText == '0' && b5.innerText == '0' && b8.innerText == '0') || (b3.innerText == '0' && b6.innerText == '0' && b9.innerText == '0') || (b4.innerText == '0' && b5.innerText == '0' && b6.innerText == '0') || (b7.innerText == '0' && b8.innerText == '0' && b9.innerText == '0') || (b3.innerText == '0' && b5.innerText == '0' && b7.innerText == '0')) {
        document.getElementById('pic').classList.remove('hide')
        document.getElementById('root').innerHTML = `<p id="win">Player 0 has Won</p>`
    }
    else if ((b1.innerText == 'X' || b1.innerText == '0') && (b2.innerText == 'X'
        || b2.innerText == '0') && (b3.innerText == 'X' || b3.innerText == '0') &&
        (b4.innerText == 'X' || b4.innerText == '0') && (b5.innerText == 'X' ||
        b5.innerText == '0') && (b6.innerText == 'X' || b6.innerText == '0') &&
        (b7.innerText == 'X' || b7.innerText == '0') && (b8.innerText == 'X' ||
        b8.innerText == '0') && (b9.innerText == 'X' || b9.innerText == '0')) {
        document.getElementById('sad').classList.remove('hide')
        document.getElementById('root').innerHTML = `<p id="win">Match Draw</p>`
    }
}
reset.addEventListener('click',()=>{
    location.reload()
})