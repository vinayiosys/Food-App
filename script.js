function myFunction() 
{
    var x = document.getElementById("myTopnav");
    
    if (x.className === "header-item2 topnav") 
    {
   		x.className += " responsive header-item2";
    } 

    else 
    {
        x.className = "header-col2 topnav";
    }
}