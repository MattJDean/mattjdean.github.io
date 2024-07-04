document.addEventListener("DOMContentLoaded", function () {
  const command = "whois mattdean.tech";
  const response =
    "\nMatt Dean \nTrainee Web Developer \n<a href='https://www.netmatters.co.uk/train-for-a-career-in-tech' target='_blank'>Netmatters Scion Coalition Scheme</a> \n<span class='highlight'>Content coming soon...</span>";
  const typedtext = document.getElementById("typedtext");
  let index = 0;

  function typeText() {
    if (index < command.length) {
      typedtext.innerHTML += command.charAt(index);
      index++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(executeCommand, 500);
    }
  }

  function executeCommand() {
    typedtext.innerHTML += "<br>" + response.replace(/\n/g, "<br>");
    removeCursor();
    setTimeout(() => {
      index = 0;
      typedtext.innerHTML += "<br><br>$ ";
      addCursor();
      showContactSection(); 
    }, 2000);
  }

  function removeCursor() {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.remove();
    }
  }

  function addCursor() {
    removeCursor(); 
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "_";
    typedtext.appendChild(cursor);
  }

  function showContactSection() {
    const contactSection = document.querySelector(".contact-me");
    contactSection.classList.add("show");
  }

  
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  addCursor();
  setTimeout(typeText, 1000);
});
