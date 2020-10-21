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

      if (checkId == "aboutme") {
        text = "block 1";
      } else if (checkId == "expirience") {
        text = "block 2";
      } else if (checkId == "skills") {
        text = "block 3";  
      } 
   console.log(text);
   
}