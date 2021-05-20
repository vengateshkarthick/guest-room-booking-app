    //Location search input
    var searchPlace=document.querySelector(".plsrch");
    //dummy result box
    var popup=document.querySelector(".popup");
    //adding (or) removing resultbox search.
    searchPlace.addEventListener('focus',()=>{
        popup.classList.add("flex");
    })

    searchPlace.addEventListener("blur",()=>{
        popup.classList.remove("flex");
    
    })
    //Menuicon
    var menuIcon=document.querySelector("#icon");
    //Menu List
    var mnuList=document.querySelector(".mnu_items");

    //Toogle menu list with the "icon" 
    menuIcon.addEventListener('click',()=>{
        if(mnuList.classList.contains('flex'))
            mnuList.classList.remove('flex');
        else
            mnuList.classList.add('flex');

    })
    menuIcon.addEventListener('keyup',()=>{
        if(mnuList.classList.contains('flex'))
            mnuList.classList.remove('flex');
        else
            mnuList.classList.add('flex');

    })
    // creating a counter in header tag
    var counterTag=document.querySelector("#count");
    setInterval( ()=>{
            if(parseInt (counterTag.textContent)<500)
              counterTag.textContent=`${parseInt(counterTag.textContent)+10}+`;
    }
    ,70);
    //Displaying a form based on User Response
    function UpdateHostForm(){
        //default form when page loads..
        //displaying only hostexperience form --hstexp
        document.getElementById("hstexp").style.display="flex";
        document.getElementById("signin").style.display="none";
        document.getElementById("signup").style.display="none";

    }

    function UpdateSignInForm(){
        //displaying only the Login form --signin
        document.getElementById("hstexp").style.display="none";
        document.getElementById("signin").style.display="flex";
        document.getElementById("signup").style.display="none";

    }
    function UpdateSignUpForm(){
        //displaying only the Account Creation form --signup
        document.getElementById("hstexp").style.display="none";
        document.getElementById("signin").style.display="none";
        document.getElementById("signup").style.display="flex";
    }

    