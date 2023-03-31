
/* The nav-bar function as an archive paste and the coding below changes the color of background and content 
due to witch paste the user clicks and come back to "about-me" by the reset function*/

//defying variables to access the html itens

let contentArea = document.getElementById('content-area');

let navAbout = document.getElementById('nav-about');
let textAbout = document.getElementById('text-about');
let contentAbout = document.getElementById('about-me');

let navProjects = document.getElementById('nav-projects');
let textProjects = document.getElementById('text-projects');
let contentProjects = document.getElementById('projects');

let navSkills = document.getElementById('nav-skills');
let textSkills = document.getElementById('text-skills');
let contentSkills = document.getElementById('skills');

let navContact = document.getElementById('nav-contact');
let textContact = document.getElementById('text-contact');
let contentContact = document.getElementById('contact');


function reset() {
    //to return to "about-me" section
    navProjects.style.backgroundColor = "#fff5e5";
    navSkills.style.backgroundColor = "#fff5e5";
    navContact.style.backgroundColor = "#fff5e5";

    textContact.style.color = "#763211";
    textProjects.style.color = "#763211";
    textSkills.style.color = "#763211";
    
    contentArea.style.backgroundColor = "#fff5e5";
    
    contentAbout.style.display = 'inline';
    contentProjects.style.display = 'none';
    contentSkills.style.display = 'none';
    contentContact.style.display = 'none';
}

function changeForProjects() {
    //to show content and change color for projects section
    navProjects.style.backgroundColor = "#763211";
    navSkills.style.backgroundColor = "#fff5e5";
    navContact.style.backgroundColor = "#fff5e5";

    textProjects.style.color = "#ffa357";
    textSkills.style.color = "#763211";
    textContact.style.color = "#763211";
    
    contentArea.style.backgroundColor = "#763211";
    
    contentAbout.style.display = 'none';
    contentProjects.style.display = 'inline';
    contentSkills.style.display = 'none';
    contentContact.style.display = 'none';

    contentProjects.style.color = "#ffa347";
}


function changeForSkills() {
    //to show content and change color for skills section
    navProjects.style.backgroundColor = "#fff5e5";
    navSkills.style.backgroundColor = "#ffA357";
    navContact.style.backgroundColor = "#fff5e5";
    
    textSkills.style.color = "#db122f";
    textProjects.style.color = "#763211";
    textContact.style.color = "#763211";

    contentArea.style.backgroundColor = "#ffA357";
    
    contentAbout.style.display = 'none';
    contentProjects.style.display = 'none';
    contentSkills.style.display = 'inline';
    contentContact.style.display = 'none';

    contentSkills.style.color = "#db122f";
}

function changeForContact() {
    //to show content and change color for contact section
    navProjects.style.backgroundColor = "#fff5e5";
    navSkills.style.backgroundColor = "#fff5e5";
    navContact.style.backgroundColor = "#db122f";
    
    textContact.style.color = "#fff5e5";
    textProjects.style.color = "#763211";
    textSkills.style.color = "#763211";

    contentArea.style.backgroundColor = "#db122f";
    
    contentAbout.style.display = 'none';
    contentProjects.style.display = 'none';
    contentSkills.style.display = 'none';
    contentContact.style.display = 'inline';

    contentContact.style.color = "#fff5e5";
}

//events to make changes in content shown, color and background color
navProjects.addEventListener('click', changeForProjects);
navAbout.addEventListener('click', reset);
navSkills.addEventListener('click', changeForSkills);
navContact.addEventListener('click', changeForContact);

//In "about-me" there is a button called "resume" to show my resume if clicked or to hide it if clicked again

//defying variables
let resumeButton = document.getElementById('resume-button');
let resumeContent = document.getElementById('resume');

// show or hide logic form
function showOrHideResume() {
    if(resumeContent.style.display === 'inline') {
        resumeContent.style.display = 'none';   
    } else {
        resumeContent.style.display = 'inline';
    }
}

resumeButton.addEventListener('click', showOrHideResume);

//In for fun project there are a previous and next button to change the collage that is showed.

//defyning the array with the collages sources

let collageArr = ["./forfun-project/collage 1.jpg", "./forfun-project/collage 2.jpg", "./forfun-project/collage 3.jpg", 
"./forfun-project/collage 4.jpg", "./forfun-project/collage 5.jpg", "./forfun-project/collage 6.jpg", "./forfun-project/collage 7.jpg", 
"./forfun-project/collage 8.jpg", "./forfun-project/collage 9.jpg", "./forfun-project/collage 10.jpg", "./forfun-project/collage 11.jpg", 
"./forfun-project/collage 12.jpg", "./forfun-project/collage 13.jpg", "./forfun-project/collage 14.jpg", "./forfun-project/collage 15.jpg", 
"./forfun-project/collage 16.jpg", "./forfun-project/collage 17.jpg", "./forfun-project/collage 18.jpg", "./forfun-project/collage 19.jpg", 
"./forfun-project/collage 20.jpg", "./forfun-project/collage 21.jpg", "./forfun-project/collage 22.jpg", "./forfun-project/collage 23.jpg", 
"./forfun-project/collage 24.jpg", "./forfun-project/collage 25.jpg", "./forfun-project/collage 26.jpg", "./forfun-project/collage 27.jpg", 
"./forfun-project/collage 28.jpg", "./forfun-project/collage 29.jpg", "./forfun-project/collage 30.jpg", "./forfun-project/collage 31.jpg", 
"./forfun-project/collage 32.jpg"];

//set DOM and variables
let source = document.getElementById('collage');
let next = document.getElementById('next-button');
let previous = document.getElementById('previous-button');

//set current index
let i = 0;

//set slide src to current index
source.src = collageArr[i];

function nextButton() {
    //when btn2 is clicked
    i++;
    //add 1 to current index
    if (i > collageArr.length - 1) {
      //if current index passes last photo in array
      i = 0;
      //set index back to zero
    }
    source.src = collageArr[i];
    //set slide to current index
};

function previousButton() {
//when btn1 is clicked
i--;
//minus 1 from current index
if (i < 0) {
    //if current index goes below zero
    i = collageArr.length - 1;
    //set index to the last photo in array
}
source.src = collageArr[i];
//display current photo to #slide
};

next.addEventListener('click', nextButton);
previous.addEventListener('click', previousButton);
