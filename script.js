const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const display = document.getElementById("display");
// game-function
let turn = "x";
function game(id) {
    let element = document.getElementById(id);
    if (whoWin() == false) {
        if (turn === "x" && element.innerHTML === "") {
            element.innerHTML = "x";
            whoWin(turn);
            turn = "o";
        } else if (turn === "o" && element.innerHTML === "") {
            element.innerHTML = "o";
            whoWin(turn);
            turn = "x";
        }
    }
}
// Game-rule-function
function whoWin(player) {
    let win = false;
    if (
        box1.innerHTML == box2.innerHTML &&
        box2.innerHTML == box3.innerHTML &&
        box2.innerHTML != ""
    ) {
        display.innerHTML = `${player} win`;
        return (win = true);
    } else if (
        box4.innerHTML == box5.innerHTML &&
        box5.innerHTML == box6.innerHTML &&
        box5.innerHTML != ""
    ) {
        display.innerHTML = `${player} win`;
        return (win = true);
    } else if (
        box7.innerHTML == box8.innerHTML &&
        box8.innerHTML == box9.innerHTML &&
        box8.innerHTML != ""
    ) {
        display.innerHTML = `${player} win`;
        return (win = true);
    } else if (
        box1.innerHTML == box4.innerHTML &&
        box4.innerHTML == box7.innerHTML &&
        box4.innerHTML != ""
    ) {
        display.innerHTML = `${player} win`;
        return (win = true);
    } else if (
        box2.innerHTML == box5.innerHTML &&
        box5.innerHTML == box8.innerHTML &&
        box5.innerHTML != ""
    ) {
        display.innerHTML = `${player} win`;
        return (win = true);
    } else if (
        box3.innerHTML == box6.innerHTML &&
        box6.innerHTML == box9.innerHTML &&
        box6.innerHTML != ""
    ) {
        display.innerHTML = `${player} win`;
        return (win = true);
    } else if (
        box1.innerHTML == box5.innerHTML &&
        box5.innerHTML == box9.innerHTML &&
        box5.innerHTML != ""
    ) {
        display.innerHTML = `${player} win`;
        return (win = true);
    } else if (
        box3.innerHTML == box5.innerHTML &&
        box5.innerHTML == box7.innerHTML &&
        box5.innerHTML != ""
    ) {
        display.innerHTML = `${player} win`;
        return (win = true);
    }
    return win;
}
