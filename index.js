var start=true;
var count= [];
function reset(i,j,k){
document.getElementById('A'+ i).style.color="red";
document.getElementById('A'+ j).style.color="red";
document.getElementById('A'+ k).style.color="red";
setTimeout(function(){
    location.reload()
},1000);

}




function winer(){
    for(var i=1 ; i<=9 ; i++ ){
count [i] = document.getElementById('A'+i).innerHTML;
    }
    // horizantal
    if (count[1]==count[2] && count[2]==count[3] && count[1] !=""){
        alert('palyer' +count[1] + 'wine the game');
        reset(1,2,3)
    }
    if (count[4]==count[5] && count[5]==count[6] && count[4] !=""){
        alert('palyer' +count[4] + 'wine the game');
        reset(4,5,6)
    }

    if (count[7]==count[8] && count[8]==count[9] && count[7] !=""){
        alert('palyer' +count[4] + 'wine the game');
        reset(7,8,9)
    }
    // vertical
    if (count[1]==count[4] && count[4]==count[7] && count[1] !=""){
        alert('palyer' +count[1] + 'wine the game');
        reset(1,4,7)
    }

    if (count[2]==count[5] && count[5]==count[8] && count[2] !=""){
        alert('palyer' +count[2] + 'wine the game');
        reset(2,5,8)
    }

    if (count[3]==count[6] && count[6]==count[9] && count[3] !=""){
        alert('palyer' +count[3] + 'wine the game');
        reset(3,6,9)
    }
// diagonal
if (count[1]==count[5] && count[5]==count[9] && count[1] !=""){
    alert('palyer' +count[4] + 'wine the game');
    reset(1,5,9)
}

if (count[3]==count[5] && count[5]==count[7] && count[3] !=""){
    alert('palyer' +count[3] + 'wine the game');
    reset(3,5,7)
}

}




// function insert(id) {
//     var play = document.getElementById('id')
//     if (play.innerText == '' || play.innerText == 'O' ){
//         play.innerText = 'X'
//     }else if (play. innerText =='X') {
//         play.innerText='O';
   
//     console.log(play.innerText);
// } 
//     else 
//     {

//         alert("no player");
//     }
//     winer();
// }



function insert(id){
    var s=document.getElementById(id);
    if(s.innerHTML=='O' || s.innerHTML==""){
    s.innerHTML="X";

}
else if( s.innerHTML=="X"){
     s.innerHTML="O";

          }
else{
    alert("no player");
}
winer();
}