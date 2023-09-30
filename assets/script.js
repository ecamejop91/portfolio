/*document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < 500) {
      document.body.style.backgroundColor = "white";
    } else if (scrollPosition < 1000) {
      document.body.style.backgroundColor = "lightblue";
    } else if (scrollPosition < 1500) {
      document.body.style.backgroundColor = "lightgreen";
    } else {
      document.body.style.backgroundColor = "lightpink";
    }
  });
  


---------------------------------------------------------------------------------------


  let lastScrollTop = 0;

document.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Calculate the ratio of scroll position to max scroll
  const ratio = scrollPosition / maxScroll;

  // Calculate new color based on scroll ratio
  const newRed = Math.floor(255 * ratio);
  const newGreen = Math.floor(255 - (255 * ratio));

  const newColor = `rgb(${newRed}, ${newGreen}, 255)`;

  // Smoothly transition to the new color
  document.body.style.transition = 'background-color 0.5s ease';
  document.body.style.backgroundColor = newColor;

  lastScrollTop = scrollPosition;
});

*/

document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    
    // Adjust the 2 in the next line to make the background scroll faster or slower
    const backgroundPosition = scrollPosition / 2;
  
    document.body.style.backgroundPosition = `center -${backgroundPosition}px`;
  });
  
  
  