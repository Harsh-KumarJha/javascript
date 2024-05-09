let score=JSON.parse(localStorage.getItem('score')) || 
({ loss: 0,
        wins: 0,
        draw: 0
        });

//JS come with automatic feature of the autoboxing that allows the propperties in a to be used with methods and fucntions
// such as console.log('hello'.length)        && console.log('hello'.toUppperCase())  where the string 'hello" is wrapped in a special object 
// and this object thus has the features AUTOBOXING doesnot work with null and undefined

//  Objects are referrence
//--> group the related values togethers
//const object1={
    // message ='hello';
// };
//  const object2= object1  this object 2 is a copy of the object 1's reference  THIS IS COPY BY REFERENCE
//thus we can even change the const values ;
// direct object comparison is not possible as they compare references but as the reference values are different as they are stored 
// at different places or locations  they will only work as true when they have same reference as in example OBJECT2 & OBJECT1 has same reference


/*DESTRUCTURING 
const message = object1.message;
const { message, price } = object1;
only works when the property's name is same as the variable name;
and also can work with multiple properties at once as above in message as price

*/


/*
Short Hand property

const object5={
    message: message 
    property name and variable name is same we can type it once and works perfectly fine
     as--> message


     method : function funct1(){
        console.log('method');
     }
     method(){
        console.log('method');
     }
     both works the same
};



*/
// null is intentionally used when the things are to be kept empty


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