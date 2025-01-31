let clickCount = 0; // Counter to track how many times the button has been clicked

    function changeContent() {
      clickCount++; // Increase the click count with each click

      if (clickCount === 1) {
        document.getElementById("paragraph").innerHTML = "first just know that as your boyfriend, no matter how far away i am from you i will always do my best to put a smile on your face :)";
        
        var img =  document.getElementById("image");
        img.src = "i_love_you_to_the_moon_and_back.jpg"; 
        img.width = "350px"; 
        img.height = "300px"; 

        document.getElementById("body").style.background = "#ffdef1";

    } 
      else if (clickCount === 2) {
        document.getElementById("paragraph").innerHTML = "This is the second update to the paragraph.";
        document.getElementById("image").src = "image2.jpg";   
    } 
      else if (clickCount === 3) {
        document.querySelector("button").innerHTML = "one more surprise!";
        document.getElementById("paragraph").classList.add("highlight");
        document.getElementById("image").src = "image2.jpg"; 
    } 
      else {
        // After third click, the content will stay the same
        document.getElementById('body').addEventListener('click', function() {
          window.location.href = 'love_letter_page.html';
        });
      }
    }