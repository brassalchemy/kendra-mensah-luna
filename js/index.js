// <---------------- TARGET MESSAGE FORM ---------------->
const messageForm = document.querySelector('form[name="leave_message"]')
console.log(messageForm)

// <--------------- CHECKING FOR SUBMISSIONS -------------->  
messageForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
  
    // Get values from form inputs 
    const userName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
  
    // Log values to console
    console.log("Name:", userName);
    console.log("Email:", usersEmail);
    console.log("Message:", userMessage);
  
    // Select the #messages section and its <ul>
    const messageSection = document.getElementById("Messages");
    const messageList = messageSection.querySelector("ul");
  
    // Create a new <li> element for the message
    const newMessage = document.createElement("li");
  
    // Set inner HTML with user's info
    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${userName}</a> wrote:
      <span> ${userMessage} </span>
    `;
  
    // Create a Remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
  
    // Add event listener to Remove button
    removeButton.addEventListener("click", function () {
      const entry = removeButton.parentNode; // The <li> element
      entry.remove(); // Remove the message from the DOM
    });
  
    // Add the Remove button to the <li>
    newMessage.appendChild(removeButton);
  
    // Add the message to the <ul>
    messageList.appendChild(newMessage);
  
    // Reset the form fields
    messageForm.reset();
  });

// < --------------------- FETCH REQUEST ----------------------- >

// Search the DOM for an element with this id 
const projectSection = document.getElementById("Projects")
console.log(projectSection)

// Search the DOM for an element that matches this selector 
const projectList = projectSection.querySelector("ul")

fetch('https://api.github.com/users/brassalchemy/repos')
        .then(response => response.json()) 
        .then(data => {
         const repositories = data;
         console.log(repositories)
         for (let i = 0; i < repositories.length; i++) {
          const repository = repositories[i]
          const project = document.createElement('li')
          project.textContent = repository.name
          projectList.appendChild(project)
          console.log(repository)
         }
        })
        .catch(error => console.error('Error', error))



       


        







