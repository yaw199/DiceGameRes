//Let User Enter Their Names//

// var firstPlayer = prompt('Player 1 Name: ');
// var secondPlayer = prompt('Player 2 Name: ');

// Replace players Name//

document.querySelector('.player1').innerHTML = firstPlayer;
document.querySelector('.player2').innerHTML =secondPlayer;

// Rolling dice//

function rollDice(){
    var num1 = Math.floor(Math.random()*6) + 1;
    var num2 = Math.floor(Math.random()*6) + 1;
    
    document.querySelector('.img1').setAttribute('src', 'imagesDice/' + num1 + '.png');
    document.querySelector('.img2').setAttribute('src', 'imagesDice/' + num2+'.png');

    if (num1 === num2){
        document.querySelector('.display').innerHTML = 'Draw, Yeah!!! ';
    }

    else if (num1>num2){
        document.querySelector('.display').innerHTML = (firstPlayer + '!! You Won. ');   
    
    }

    else {

        document.querySelector('.display').innerHTML = (secondPlayer + '!! You Won. ');


    }
  

    

}

