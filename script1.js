const links = [
    "link1", "link2", "link3", "link4", "link5",
    "link6", "link7", "link8", "link9", "link10",
    "link11", "link12", "link13", "link14"
  ];

  var startDate = new Date(2025, 1, 1); // 1 February 2025
  const today = new Date(); // Current date

  const stripTime = (date) => new Date(date.setHours(0, 0, 0, 0));
  const todayStripped = stripTime(new Date(today));

  links.forEach((linkId, index) => {
    const linkDate = new Date(startDate);
    linkDate.setDate(startDate.getDate() + index); // Add index days to the start date
    const linkElement = document.getElementById(linkId);

    // Strip time from linkDate for comparison
    const linkDateStripped = stripTime(linkDate);

    // Check if today's date matches the link's assigned date
    if (todayStripped.getTime() === linkDateStripped.getTime()) {
      linkElement.classList.remove("disabled");
      message.textContent = `Link ${index + 1} is enabled for today!`;
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
