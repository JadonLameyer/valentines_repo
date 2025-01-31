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
        document.getElementById("paragraph").innerHTML = "it really sucks that I can't be with you, but i know we're are going to make the most of this beautiful day!";
 
        var img =  document.getElementById("image");
        img.src = "man and hearts.jpg"; 
        img.width= "417px"; 
        img.height= "380px";  
        document.getElementById("body").style.background = "#bba16e";
    } 
      else if (clickCount === 3) {
        document.getElementById("paragraph").innerHTML =  "you are a shining light in my life and you deserve the world of happiness";

        var img =  document.getElementById("image");
        img.src = "dinosaur.jpg"; 
        img.width= "417px"; 
        img.height= "380px";  
        document.getElementById("body").style.background = "#ffffff";
    } 
      else if (clickCount === 4) {
        document.getElementById("paragraph").innerHTML =  "you are really special to me nomthandazo, really special. i know that we haven't spent a lot of time with each other, but things will get better! i love you and i love us, and i will always choose you no matter the distance.";
        var img =  document.getElementById("image");
        img.src = "love notes.jpg"; 
        img.width= "417px"; 
        img.height= "380px";  
        document.getElementById("body").style.background = "#7e7a6e";
    } 
      else if (clickCount === 5) {
        document.getElementById("paragraph").innerHTML = "getting a call from you every morning is a blessing, getting to spend time speaking to you is a blessing, being able to send you TikToks is a blessing - having you in my life is a blessing and something i'll never, ever take for granted";

        var img =  document.getElementById("image");
        img.src = "snoopy love with hearts.jpg"; 
        img.width= "417px"; 
        img.height= "380px";  
        document.getElementById("body").style.background = "#f8e3ec";
    } 
     else if (clickCount === 6) {
        document.getElementById("paragraph").innerHTML = "you're such a beautiful person, so kind, so sweet! you're so super intelligent and you always know how to make me laugh!";

        var img =  document.getElementById("image");
        img.src = "rose and hearts.jpg";
        img.width= "417px"; 
        img.height= "380px";  
        document.getElementById("body").style.background = "#96734d";
    } 
      else if (clickCount === 7) {
        document.getElementById("paragraph").innerHTML = "every single moment of every single day i think about you, you're always on my mind. you mean the absolute world to me and i can't wait to make so many more memories with you";
        var img =  document.getElementById("image");
        img.src = "youre_all_i_ever_wanted.jpg"; 
        img.width= "417px"; 
        img.height= "380px";  
        document.getElementById("body").style.background = "#f7f1e3";
    } 
      else if (clickCount === 8) {
        document.getElementById("paragraph").innerHTML = "so miss nomthandazo martha rametsi, will you be my valetine?";
        var img =  document.getElementById("image");
        img.src = "valetines dinner.jpg"; 
        img.width= "417px"; 
        img.height= "380px"; 
        document.getElementById("body").style.background = "#aaa498";
    } 

      else {
        // After third click, the content will stay the same
        document.getElementById('body').addEventListener('click', function() {
          window.location.href = 'love_letter_page.html';
        });
      }
    }