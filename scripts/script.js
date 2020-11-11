const aboutMe = document.getElementById('aboutme');
const expirience = document.getElementById('experience');
const skills = document.getElementById('skills');

aboutMe.addEventListener('click', openSection);
expirience.addEventListener('click', openSection);
skills.addEventListener('click', openSection);

function openSection (checkId) {
    
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
    }
    else {
        document.getElementById("efam").style.display = "none";
      }} else if (checkId === "experience") {
        if (display1 === "none"){
        document.getElementById("efex").style.display = "block";
    }
    else {
        document.getElementById("efex").style.display = "none";
    }
      } else if (checkId == "skills") {
        if (display2 === "none"){
            document.getElementById("efsk").style.display = "block";
        }
        else {
            document.getElementById("efsk").style.display = "none";
        }
      } 
    }

const upButton = document.querySelector("button");
upButton.addEventListener('click', checkButton); 

function checkButton () {
  window.scrollTo(
   {
  top: 0,
  left: 0,
  behavior: "smooth"
  }
  );
}

 let imgButton = document.getElementById("imgB");
upButton.addEventListener('mouseover', goUp);
function goUp () {
  imgButton.src = "img/upButton2.png";
  // return console.log('ok');
};
upButton.addEventListener('mouseout', stayDown);
function stayDown () {
  imgButton.src = "img/upButton.png";
}
