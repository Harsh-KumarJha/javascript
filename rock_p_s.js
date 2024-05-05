let computermove='';
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

