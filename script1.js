const links = [
    "link1", "link2", "link3", "link4", "link5",
    "link6", "link7", "link8", "link9", "link10",
    "link11", "link12", "link13", "link14"
  ];

  const startDate = new Date(2025, 1, 1); // 1 February 2025
  const today = new Date(); // Current date


  links.forEach((linkId, index) => {
    const linkDate = new Date(startDate);
    linkDate.setDate(startDate.getDate() + index); // Add index days to the start date
    const linkElement = document.getElementById(linkId);

    // Check if today's date matches the link's assigned date
    if (
      today.getFullYear() === linkDate.getFullYear() &&
      today.getMonth() === linkDate.getMonth() &&
      today.getDate() === linkDate.getDate()
    ) {
      linkElement.classList.remove("disabled");
      message.textContent = `you can read Love Letter: Feb ${index + 1} today!`;
    }

    // Add a click event to show a message when a link is clicked
    linkElement.addEventListener("click", (e) => {
      if (linkElement.classList.contains("disabled")) {
        e.preventDefault(); // Prevent navigation if the link is disabled
        alert("no no no, come back when the time is right :)");
      }
    });
  });

  // If no links are enabled, show a default message
  if (!document.querySelector("a:not(.disabled)")) {
    message.textContent = "No links are enabled for today.";
  }
