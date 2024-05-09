let score=JSON.parse(localStorage.getItem('score')) || 
({ loss: 0,
        wins: 0,
        draw: 0
        })
        ;
// if(!score){
//     score={    
//     loss:0,
//     wins:0,
//     draw:0
//     };
// }
function startGame(playerMove){
    const computermove=computerMove();
    let result='';
    if(playerMove==='rock'){
        if(computermove==='rock'){
            result='Tie.';
        }
        else if(computermove==='paper'){
            result='You Lost.';
        }
        else if(computermove==='scissors'){
            result='You Win.';
        }
        
    }
    else if(playerMove==='paper'){
        if(computermove==='rock'){
            result='You Win.';
        }
        else if(computermove==='paper'){
            result='Tie.';
        }
        else if(computermove==='scissors'){
            result='You Lost.';
        }
    }
    else{
        if(computermove==='rock'){
            result='You Lost.';
        }
        else if(computermove==='paper'){
            result='You Win.';
        }
        else if(computermove==='scissors'){
            result='Tie.';
        }

    }

    if(result==='Tie.'){
        score.draw++;
    }
    else if(result==='You Win.'){
        score.wins++;
    }
    else if(result==='You Lost.'){
       score.loss++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computermove}. ${result}
Won : ${score.wins} , Lost : ${score.loss} , Tie : ${score.draw}`); 
}

function computerMove(){
    const randomNumber= Math.random();
    
    if(randomNumber>=0&&randomNumber<1/3){
        computermove='rock';
    }
    else if(randomNumber>=1/3&&randomNumber<2/3){
        computermove='paper';
    }
    else if(randomNumber>=2/3&&randomNumber<1){
        computermove='scissors';
    }

    return computermove;
}

function resetscore(){
    score.loss=0;
    score.wins=0;
    score.draw=0;
    localStorage.removeItem('score');
}