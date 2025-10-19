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
    const messageSection = document.getElementById("messages");
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
  
