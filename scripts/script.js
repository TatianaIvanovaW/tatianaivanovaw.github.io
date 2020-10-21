const aboutMe = document.getElementById('aboutme');
const expirience = document.getElementById('expirience');
const skills = document.getElementById('skills');

aboutMe.addEventListener('click', openSection);
expirience.addEventListener('click', openSection);
skills.addEventListener('click', openSection);

function openSection (checkId, text) {
    
  aboutMe.addEventListener('click', checkIdAgain);
  expirience.addEventListener('click', checkIdAgain);
  skills.addEventListener('click', checkIdAgain);

     function checkIdAgain(event) { 
     return event.target.id;
     }
     checkId = checkIdAgain(checkId);

     const style = getComputedStyle(document.getElementById("efam"));
     const display = style.display;
     const style1 = getComputedStyle(document.getElementById("efex"));
     const display1 = style1.display;
     const style2 = getComputedStyle(document.getElementById("efsk"));
     const display2 = style2.display;
        //  console.log(display);
     

      if (checkId == "aboutme") {
          if (display === "none"){
        document.getElementById("efam").style.display = "block";
    }else {
        document.getElementById("efam").style.display = "none";
    }
      } else if (checkId == "expirience") {
        if (display1 === "none"){
        document.getElementById("efex").style.display = "block";
    }else {
        document.getElementById("efex").style.display = "none";
    }
      } else if (checkId == "skills") {
        if (display2 === "none"){
            document.getElementById("efsk").style.display = "block";
        }else {
            document.getElementById("efsk").style.display = "none";
        }
      } 
   console.log(text);
   
}

