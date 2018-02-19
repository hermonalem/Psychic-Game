var did_win = new Boolean(false);
var wins_num = 0;
var losses_num = 0;
var guesses_left = 9;
window.document.onload = function(){
    document.getElementById("wins_counter").innerHTML = wins_num;
    document.getElementById("losses_counter").innerHTML = losses_num;
    document.getElementById("guess_left").innerHTML = guesses_left;
}
function resetScreen(){
    if(did_win==true)
    {
        wins_num = wins_num+1;
        guesses_left = 9;
        document.getElementById("wins_counter").innerHTML = wins_num;
        document.getElementById("guess_left").innerHTML = guesses_left;
    }
    else{
        losses_num = losses_num+1;
        guesses_left = 9;
        document.getElementById("losses_counter").innerHTML = losses_num;
        document.getElementById("guess_left").innerHTML = guesses_left;
    }
    did_win= false;
     document.getElementById("guessed").value="";   
        }//end resetScreen()       
            var my_char_int = Math.random () * (25-0) +0;
            var my_char = String.fromCharCode (97 + my_char_int)
   function myguess_function() {
                if(guesses_left == 0){
                    resetScreen();
                }  
           var userguesses = String.fromCharCode(event.keyCode);
            userguesses = userguesses.toLowerCase();
    
         
            guesses_left = guesses_left -1;
            document.getElementById("guess_left").innerHTML = guesses_left;
            document.getElementById('guessed').innerHTML = userguesses;
            if (my_char == userguesses) 
            {
                did_win = true;
                resetScreen();
            }   
        }
    
