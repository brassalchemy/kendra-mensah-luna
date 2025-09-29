// Create a new <footer> element 
const body = document.body;

// ------------------------- FOOTER ----------------------

// Create a footer element <footer></footer> 
const footer = document.createElement("footer"); 
// Append footer to html body 
body.appendChild(footer);

// Create a new Date object 
const today = new Date(); 

// Get the current year (call the function!)
const thisYear = today.getFullYear();  

// Create a new <p> element for copyright 
const copyright = document.createElement("p"); 

// Set inner HTML with name and current year 
copyright.innerHTML = `\u00A9 Kendra Mensah ${thisYear}`;

// Append <p> to the footer 
footer.appendChild(copyright); 

// Style the footer 
footer.style.textAlign = "center"; 

// ------------------------- FOOTER ----------------------

// List of technical skills 
const skills = ["Javascript", "HTML", "CSS", "GitHub"]  

// select the skills section by id 
const skillsSection = document.getElementById("Skills");

// Select the <ul> inside the Skills section
const skillsList = skillsSection.querySelector("ul");

// Loop through the skills array 
// <ul>
//   <li>skill</li>
//   ...
// </ul> 
for (let i = 0; i < skills.length; i++) {  
    // create a new <li> element 
    const skill = document.createElement("li");
    
    // Set the text inside of the <li> to current skill 
    skill.innerHTML = skills[i];

    // Append <li> to skills list 
    skillsList.appendChild(skill);
}


