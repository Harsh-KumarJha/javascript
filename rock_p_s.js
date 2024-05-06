

function startGame(playerMove){
    const computermove=computerMove();
    let result='';
    if(playerMove==='rock'){
        if(computermove==='rock'){
            result='Tie';
        }
        else if(computermove==='paper'){
            result='You lost.';
        }
        else if(computermove==='scissors'){
            result='You win.';
        }
        
    }
    else if(playerMove==='paper'){
        if(computermove==='rock'){
            result='You Win';
        }
        else if(computermove==='paper'){
            result='Tie.';
        }
        else if(computermove==='scissors'){
            result='You lost.';
        }
    }
    else{
        if(computermove==='rock'){
            result='You Lost';
        }
        else if(computermove==='paper'){
            result='You Win.';
        }
        else if(computermove==='scissors'){
            result='Tie.';
        }

    }
    alert(`You picked ${playerMove}. Computer picked ${computermove}. ${result}`);
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

