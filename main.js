
function animate() {
    document.getElementById("progress").style.width = "75%";
}
let choose = 0;
let player1 = "";
let player2 = "";
let whostart = 1;
let xoro = 0;
function reloadnow() {
    window.location.reload();
}
function p1start() {
    whostart = 1;
}
function p2start() {
    whostart = 2;
}
function startY() {
    xoro = 0;
}
function startX() {
    xoro = 1;
}
function choosecomp() {
    // console.log('clickedcomp')
    choose = 1;
    document.getElementById("progress").style.width = "100%";
    document.getElementById("play1").innerHTML = 'You';
    document.getElementById("play2").innerHTML = 'Computer';
    document.getElementById("extra1").style.display = "block";
    document.getElementById("extra2").style.display = "block";
}
function choose2play() {
    // console.log('clickedplay')
    choose = 2;
    document.getElementById("progress").style.width = "100%";
    document.getElementById("extra1").style.display = "none";
    document.getElementById("extra2").style.display = "block";
}
function startinggame() {
    if (choose == 0) {
        alert("Please, choose any one option.");
        return;
    }
    else if (choose == 1) {
        let name = prompt("What's your name?", "Guest");
        player1 = name
        player2 = "Computer"
        document.getElementById("bigplay1").innerHTML = player1 + " Score:";
        document.getElementById("bigplay2").innerHTML = player2 + " Score:";
        document.getElementById("smallplay1").innerHTML = "P: ";
        document.getElementById("smallplay2").innerHTML = "C: ";
    }
    else if (choose == 2) {
        let name1 = prompt("Enter name of player 1:", "Player1");
        let name2 = prompt("Enter name of player 2:", "Player2");
        player1 = name1
        player2 = name2
        document.getElementById("bigplay1").innerHTML = player1 + " Score:";
        document.getElementById("bigplay2").innerHTML = player2 + " Score:";
        document.getElementById("smallplay1").innerHTML = "P1: ";
        document.getElementById("smallplay2").innerHTML = "P2: ";
    }
    if (whostart == 0) {
        let ele1 = document.getElementById("playernotchoosed");
        ele1.style.display = "block";
        setTimeout(removemsg, 5000)
        whostart = 1;
    }
    if (whostart == 2) {
        cpu();
    }
    let ele = document.getElementById("Starting");
    ele.style.display = "none";
    let ele3 = document.getElementById("navbar");
    ele3.style.display = "block";
    let ele2 = document.getElementById("Gameishere");
    ele2.style.display = "block";
}
function removemsg() {
    let ele = document.getElementById("playernotchoosed");
    ele.style.display = "none";
}
function findscore() {
    window.scrollBy(0, 480);
    let ele = document.getElementsByClassName("score");
    var i;
    for (i = 0; i < ele.length; i++) {
        ele[i].style.animation = "blink 2s";
    }
    setTimeout(normal, 2000)
}
function normal() {
    let ele = document.getElementsByClassName("score");
    var i;
    for (i = 0; i < ele.length; i++) {
        ele[i].style.animation = "none";
    }
}
function openrate() {
    document.getElementById("ratenow").style.display = "flex";
}
function submitrate() {
    document.getElementById("ratenow").style.display = "none";
    let ele = document.getElementById("thankyoumsg");
    ele.style.display = "flex";
    setTimeout(removemsg2, 5000)
}
function removemsg2() {
    let ele = document.getElementById("thankyoumsg");
    ele.style.display = "none";
}

let chance = 0;
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function a1called() {
    if (arr[0] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[0] = 1;
        else arr[0] = 2;
        if (xoro == 1) {
            document.getElementById("a1").innerHTML = 'X';
        }
        else {
            document.getElementById("a1").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[0] = 2;
        else arr[0] = 1;
        if (xoro == 0) {
            document.getElementById("a1").innerHTML = 'X';
        }
        else {
            document.getElementById("a1").innerHTML = 'O';
        }
    }
    cpu();
}
function a2called() {
    if (arr[1] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[1] = 1;
        else arr[1] = 2;
        if (xoro == 1) {
            document.getElementById("a2").innerHTML = 'X';
        }
        else {
            document.getElementById("a2").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[1] = 2;
        else arr[1] = 1;
        if (xoro == 0) {
            document.getElementById("a2").innerHTML = 'X';
        }
        else {
            document.getElementById("a2").innerHTML = 'O';
        }
    }
    cpu();
}
function a3called() {
    if (arr[2] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[2] = 1;
        else arr[2] = 2;
        if (xoro == 1) {
            document.getElementById("a3").innerHTML = 'X';
        }
        else {
            document.getElementById("a3").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[2] = 2;
        else arr[2] = 1;
        if (xoro == 0) {
            document.getElementById("a3").innerHTML = 'X';
        }
        else {
            document.getElementById("a3").innerHTML = 'O';
        }
    }
    cpu();
}
function b1called() {
    if (arr[3] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[3] = 1;
        else arr[3] = 2;
        if (xoro == 1) {
            document.getElementById("b1").innerHTML = 'X';
        }
        else {
            document.getElementById("b1").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[3] = 2;
        else arr[3] = 1;
        if (xoro == 0) {
            document.getElementById("b1").innerHTML = 'X';
        }
        else {
            document.getElementById("b1").innerHTML = 'O';
        }
    }
    cpu();
}
function b2called() {
    if (arr[4] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[4] = 1;
        else arr[4] = 2;
        if (xoro == 1) {
            document.getElementById("b2").innerHTML = 'X';
        }
        else {
            document.getElementById("b2").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[4] = 2;
        else arr[4] = 1;
        if (xoro == 0) {
            document.getElementById("b2").innerHTML = 'X';
        }
        else {
            document.getElementById("b2").innerHTML = 'O';
        }
    }
    cpu();
}
function b3called() {
    if (arr[5] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[5] = 1;
        else arr[5] = 2;
        if (xoro == 1) {
            document.getElementById("b3").innerHTML = 'X';
        }
        else {
            document.getElementById("b3").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[5] = 2;
        else arr[5] = 1;
        if (xoro == 0) {
            document.getElementById("b3").innerHTML = 'X';
        }
        else {
            document.getElementById("b3").innerHTML = 'O';
        }
    }
    cpu();
}
function c1called() {
    if (arr[6] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[6] = 1;
        else arr[6] = 2;
        if (xoro == 1) {
            document.getElementById("c1").innerHTML = 'X';
        }
        else {
            document.getElementById("c1").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[6] = 2;
        else arr[6] = 1;
        if (xoro == 0) {
            document.getElementById("c1").innerHTML = 'X';
        }
        else {
            document.getElementById("c1").innerHTML = 'O';
        }
    }
    cpu();
}
function c2called() {
    if (arr[7] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[7] = 1;
        else arr[7] = 2;
        if (xoro == 1) {
            document.getElementById("c2").innerHTML = 'X';
        }
        else {
            document.getElementById("c2").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[7] = 2;
        else arr[7] = 1;
        if (xoro == 0) {
            document.getElementById("c2").innerHTML = 'X';
        }
        else {
            document.getElementById("c2").innerHTML = 'O';
        }
    }
    cpu();
}
function c3called() {
    if (arr[8] != 0) {
        return;
    }
    chance = chance + 1;
    if (chance % 2 == 1) {
        if (whostart == 1) arr[8] = 1;
        else arr[8] = 2;
        if (xoro == 1) {
            document.getElementById("c3").innerHTML = 'X';
        }
        else {
            document.getElementById("c3").innerHTML = 'O';
        }
    }
    else {
        if (whostart == 1) arr[8] = 2;
        else arr[8] = 1;
        if (xoro == 0) {
            document.getElementById("c3").innerHTML = 'X';
        }
        else {
            document.getElementById("c3").innerHTML = 'O';
        }
    }
    cpu();
}

let p1score = 0;
let p2score = 0;
let tiescore = 0;
function changetoone() {
    choose = 1;
    whostart = 0;
    restart();
    startinggame();
}
function changetotwo() {
    choose = 2;
    whostart = 0;
    restart();
    startinggame();
}
function restart() {
    p1score = 0;
    p2score = 0;
    tiescore = 0;
    document.getElementById("disp1").innerHTML = p1score;
    document.getElementById("disp2").innerHTML = p2score;
    document.getElementById("disptie").innerHTML = tiescore;
    clearall();
}
let compdone = 0;
function cpu() {
    if (choose == 1 && compdone == 1) {
        compdone = 0;
        return;
    }
    let prep1 = p1score;
    let prep2 = p2score;
    result();
    if (chance == 9) {
        // console.log("done");
        if (prep1 < p1score) {
            document.getElementById("whowon").innerHTML = player1 + " Won!"
            document.getElementById("whowon").style.display = "block";
        }
        else if (prep2 < p2score) {
            document.getElementById("whowon").innerHTML = player2 + " Won!"
            document.getElementById("whowon").style.display = "block";
        }
        else {
            tiescore = tiescore + 1;
            document.getElementById("whowon").innerHTML = "Its a tie!"
            document.getElementById("whowon").style.display = "block";
            document.getElementById("disptie").innerHTML = tiescore;
        }
        setTimeout(clearall, 2000);
        return;
    }
    if (chance >= 18) {
        // console.log("done");
        if (prep1 < p1score) {
            document.getElementById("whowon").innerHTML = player1 + " Won!"
            document.getElementById("whowon").style.display = "block";
        }
        else if (prep2 < p2score) {
            document.getElementById("whowon").innerHTML = player2 + " Won!"
            document.getElementById("whowon").style.display = "block";
        }
        else {
            tiescore = tiescore + 1;
            document.getElementById("whowon").innerHTML = "Its a tie!"
            document.getElementById("disptie").innerHTML = tiescore;
            document.getElementById("whowon").style.display = "block";
        }
        setTimeout(clearall, 2000);
        return;
    }

    if (chance != 9 && chance != 18 && choose == 1) {
        let i=-1;
        i = bestmove(arr, 2) ;
        compdone = 1;
        if (i != -1) {
            switch (i) {
                case 0:
                    a1called();
                    break;
                case 1:
                    a2called();
                    break;
                case 2:
                    a3called();
                    break;
                case 3:
                    b1called();
                    break;
                case 4:
                    b2called();
                    break;
                case 5:
                    b3called();
                    break;
                case 6:
                    c1called();
                    break;
                case 7:
                    c2called();
                    break;
                case 8:
                    c3called();
                    break;
            }
        }
    }
    prep1 = p1score;
    prep2 = p2score;
    result();
    if (chance == 9) {
        // console.log("done");
        if (prep1 < p1score) {
            document.getElementById("whowon").innerHTML = player1 + " Won!";
            document.getElementById("whowon").style.display = "block";
        }
        else if (prep2 < p2score) {
            document.getElementById("whowon").innerHTML = player2 + " Won!";
            document.getElementById("whowon").style.display = "block";
        }
        else {
            tiescore = tiescore + 1;
            document.getElementById("whowon").innerHTML = "Its a tie!"
            document.getElementById("whowon").style.display = "block";
            document.getElementById("disptie").innerHTML = tiescore;
        }
        setTimeout(clearall, 2000);
    }
    if (chance >= 18) {
        // console.log("done");
        if (prep1 < p1score) {
            document.getElementById("whowon").innerHTML = player1 + " Won!";
            document.getElementById("whowon").style.display = "block";
        }
        else if (prep2 < p2score) {
            document.getElementById("whowon").innerHTML = player2 + " Won!";
            document.getElementById("whowon").style.display = "block";
        }
        else {
            tiescore = tiescore + 1;
            document.getElementById("whowon").innerHTML = "Its a tie!"
            document.getElementById("whowon").style.display = "block";
            document.getElementById("disptie").innerHTML = tiescore;
        }
        setTimeout(clearall, 2000);
    }
}

function result() {
    if ((arr[0] != 0) && (arr[0] == arr[1]) && (arr[1] == arr[2])) {
        document.getElementById("a1").style.background = "magenta";
        document.getElementById("a2").style.background = "magenta";
        document.getElementById("a3").style.background = "magenta";
        if (arr[0] == 1)
            p1score = p1score + 1;
        document.getElementById("disp1").innerHTML = p1score;
        if (arr[0] == 2)
            p2score = p2score + 1;
        document.getElementById("disp2").innerHTML = p2score;
        if (chance <= 9) chance = 9;
        else chance = 19;
    }
    if ((arr[3] != 0) && (arr[3] == arr[4]) && (arr[4] == arr[5])) {
        document.getElementById("b1").style.background = "magenta";
        document.getElementById("b2").style.background = "magenta";
        document.getElementById("b3").style.background = "magenta";
        if (arr[3] == 1)
            p1score = p1score + 1;
        document.getElementById("disp1").innerHTML = p1score;
        if (arr[3] == 2)
            p2score = p2score + 1;
        document.getElementById("disp2").innerHTML = p2score;
        if (chance <= 9) chance = 9;
        else chance = 19;
    }
    if ((arr[6] != 0) && (arr[6] == arr[7]) && (arr[7] == arr[8])) {
        document.getElementById("c1").style.background = "magenta";
        document.getElementById("c2").style.background = "magenta";
        document.getElementById("c3").style.background = "magenta";
        if (arr[6] == 1)
            p1score = p1score + 1;
        document.getElementById("disp1").innerHTML = p1score;
        if (arr[6] == 2)
            p2score = p2score + 1;
        document.getElementById("disp2").innerHTML = p2score;
        if (chance <= 9) chance = 9;
        else chance = 19;
    }
    if ((arr[0] != 0) && (arr[0] == arr[3]) && (arr[3] == arr[6])) {
        document.getElementById("a1").style.background = "magenta";
        document.getElementById("b1").style.background = "magenta";
        document.getElementById("c1").style.background = "magenta";
        if (arr[0] == 1)
            p1score = p1score + 1;
        document.getElementById("disp1").innerHTML = p1score;
        if (arr[0] == 2)
            p2score = p2score + 1;
        document.getElementById("disp2").innerHTML = p2score;
        if (chance <= 9) chance = 9;
        else chance = 19;
    }
    if ((arr[0] != 0) && (arr[0] == arr[4]) && (arr[4] == arr[8])) {
        document.getElementById("a1").style.background = "magenta";
        document.getElementById("b2").style.background = "magenta";
        document.getElementById("c3").style.background = "magenta";
        if (arr[0] == 1)
            p1score = p1score + 1;
        document.getElementById("disp1").innerHTML = p1score;
        if (arr[0] == 2)
            p2score = p2score + 1;
        document.getElementById("disp2").innerHTML = p2score;
        if (chance <= 9) chance = 9;
        else chance = 19;
    }
    if ((arr[1] != 0) && (arr[1] == arr[4]) && (arr[4] == arr[7])) {
        document.getElementById("a2").style.background = "magenta";
        document.getElementById("b2").style.background = "magenta";
        document.getElementById("c2").style.background = "magenta";
        if (arr[1] == 1)
            p1score = p1score + 1;
        document.getElementById("disp1").innerHTML = p1score;
        if (arr[1] == 2)
            p2score = p2score + 1;
        document.getElementById("disp2").innerHTML = p2score;
        if (chance <= 9) chance = 9;
        else chance = 19;
    }
    if ((arr[2] != 0) && (arr[2] == arr[5]) && (arr[5] == arr[8])) {
        document.getElementById("a3").style.background = "magenta";
        document.getElementById("b3").style.background = "magenta";
        document.getElementById("c3").style.background = "magenta";
        if (arr[2] == 1)
            p1score = p1score + 1;
        document.getElementById("disp1").innerHTML = p1score;
        if (arr[2] == 2)
            p2score = p2score + 1;
        document.getElementById("disp2").innerHTML = p2score;
        if (chance <= 9) chance = 9;
        else chance = 19;
    }
    if ((arr[2] != 0) && (arr[2] == arr[4]) && (arr[4] == arr[6])) {
        document.getElementById("a3").style.background = "magenta";
        document.getElementById("b2").style.background = "magenta";
        document.getElementById("c1").style.background = "magenta";
        if (arr[2] == 1)
            p1score = p1score + 1;
        document.getElementById("disp1").innerHTML = p1score;
        if (arr[2] == 2)
            p2score = p2score + 1;
        document.getElementById("disp2").innerHTML = p2score;
        if (chance <= 9) chance = 9;
        else chance = 19;
    }
}

function clearall() {
    if (chance != 9) chance = 0;
    var ele = document.getElementsByClassName("check")
    document.getElementById("whowon").style.display = "none";
    // document.getElementsByClassName("check").style.background = "rgba(0, 0, 0, 0.637);";
    var i;
    for (i = 0; i < ele.length; i++) {
        ele[i].innerHTML = '';
        ele[i].style.background = "rgba(0, 0, 0, 0.637)";
    }
    var j;
    for (j = 0; j < 9; j++) {
        arr[j] = 0;
    }
    if (choose == 1 && ((chance == 9 && whostart == 1) || (chance == 0 && whostart == 2))) {
        let i;
        i = bestmove(arr, 2) ;
        console.log(i);
            // i = bestmove(arr, 2);
        // arr[i]=2;
        compdone = 1;
        if (i != -1) {
            switch (i) {
                case 0:
                    a1called();
                    break;
                case 1:
                    a2called();
                    break;
                case 2:
                    a3called();
                    break;
                case 3:
                    b1called();
                    break;
                case 4:
                    b2called();
                    break;
                case 5:
                    b3called();
                    break;
                case 6:
                    c1called();
                    break;
                case 7:
                    c2called();
                    break;
                case 8:
                    c3called();
                    break;
            }
        }
    }
}
function moveleft(arr1){
    for(let i=0;i<9;i++){
        if(arr1[i]==0) return true;
    }
    return false;
}

function evaluate(arr1,l){
    for(let i=0;i<3;i++){
        if(arr1[i+0]==arr1[i+3] && arr1[i+3]==arr1[i+6]){
            if(arr1[i+0]==l) return +10;
            else if(arr1[i+0]!=0) return -10;
        }
    }
    for(let i=0;i<3;i++){
        if(arr1[3*i+0]==arr1[3*i+1] && arr1[3*i]==arr1[3*i+2]){
            if(arr1[3*i+0]==l) return +10;
            else if(arr1[3*i+0]!=0) return -10;
        }
    }
    if(arr1[0]==arr1[4] && arr1[4]==arr1[8]){
        if(arr1[0]==l) return +10;
        else if(arr1[0]!=0) return -10;
    }
    if(arr1[2]==arr1[4] && arr1[4]==arr1[6]){
        if(arr1[2]==l) return +10;
        else if(arr1[2]!=0) return -10;
    }
    return 0;
}


function minimax(arr1,depth,isMax,l){
    let score=evaluate(arr1,l);
    if(score==10) return score;
    else if(score==-10) return score;
    if(!moveleft(arr1)) return 0;
    if(isMax){
        let best =-1000;
        for(let i=0;i<9;i++){
            if(arr1[i]==0){
                arr1[i]=l;
                best = Math.max(best, minimax(arr1,depth+1,!isMax,l));
                arr1[i]=0;
            }
        }
        return best;
    }
    else{
        let best =1000;
        for(let i=0;i<9;i++){
            if(arr1[i]==0){
                if(l==2) arr1[i]=1;
                else arr1[i]=2;
                best = Math.min(best, minimax(arr1,depth+1,!isMax,l));
                arr1[i]=0;
            }
        }
        return best;
    }
}

function bestmove(arr1,l){
    let arr2=[];
    for(let i=0;i<9;i++){
        arr2[i]=arr1[i];
    }
    let bestval=-1000;
    let ans=-1;
    for(let i=0;i<9;i++){
        if(arr2[i]==0){
            arr2[i]=l;
            let moveVal = minimax(arr2, 0, false,l);
            arr2[i]=0;
            if(moveVal>bestval){
                bestval=moveVal;
                ans=i;      
            }
            // arr1[i]=0;
        }
    }
    return ans;
}
