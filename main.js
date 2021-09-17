
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed>=97 && keyPressed<=122  || (keyPressed>=65 && keyPressed<=90))
		{
			
            document.getElementById("e").innerHTML = "YOU CLICKED AN ALPHABET KEY";
            
			
		}
        else if(keyPressed>=48 && keyPressed<=57)
		{
			
            document.getElementById("e").innerHTML = "YOU CLICKED AN NUMBER KEY";
			
		}
        else if(keyPressed>=37 && keyPressed<=40)
		{
			
            document.getElementById("e").innerHTML = "YOU CLICKED AN ARROW KEY";
			
		}
        else if(keyPressed=17)
		{
			
            document.getElementById("e").innerHTML = "YOU CLICKED AN CTRL KEY";
			
		}
        else if(keyPressed=18)
		{
			
            document.getElementById("e").innerHTML = "YOU CLICKED AN ALT KEY";
			
		}
        else if(keyPressed=27)
		{
			
            document.getElementById("e").innerHTML = "YOU CLICKED AN ESC KEY";
			
		}
        else
        {
            document.getElementById("e").innerHTML = "YOU CLICKED AN SPECIAL KEY";
        }
        

}


	