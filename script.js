//variables for the sizes of everything (just easier)
const sideBarVal = 62; 
const sideBarWidth = sideBarVal + "px"; 
const extendedSideBarWidth = (sideBarVal * 6) + "px";

//changing everything to match the variables 
document.documentElement.style.setProperty('--sideBarWidth',sideBarWidth); 
document.documentElement.style.setProperty('--sideBarFontSize',sideBarVal/1.7+"px"); 
document.documentElement.style.setProperty('--sideBarVerticlePadding',sideBarVal/3.5+"px"); 
document.getElementById("menuIcon").style.width = sideBarWidth; 
document.getElementById("menuIcon").style.height = sideBarWidth; 

// set the width of the side navigation to the extended length 
function openNav()
{
    document.getElementById("mySidenav").style.width = extendedSideBarWidth; 
    document.getElementById("main").style.marginLeft = extendedSideBarWidth; 
}

// set widht of the side navigation to 0 
function closeNav() 
{
    document.getElementById("mySidenav").style.width = sideBarWidth; 
    document.getElementById("main").style.marginLeft = sideBarWidth; 
}

let isOpen = false; 

const sideBtns = document.getElementsByClassName("sidebtn"); 

//turns off all the button functionailty since they show through 
for(let i = 0; i < sideBtns.length; i++)
    {
        sideBtns[i].style.pointerEvents = "none"; 
    }

function setNav()
{
    if(isOpen)
    {
        closeNav(); 
        //same thing here
        for(let i = 0; i < sideBtns.length; i++)
        {
            sideBtns[i].style.pointerEvents = "none"; 
        }
    }
    else
    {
        openNav(); 
        //same thing here
        for(let i = 0; i < sideBtns.length; i++)
        {
            sideBtns[i].style.pointerEvents = "all"; 
        }
    }

    isOpen = !isOpen; 
}