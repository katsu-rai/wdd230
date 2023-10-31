const visitsDisplay = document.querySelector(".visits");

const msToDays = 84600000;

function daysSinceLastVisit() {
    // Get the last visit date from local storage
    var lastVisit = localStorage.getItem('lastVisit');
  
    if (lastVisit) {
      // Convert the stored date string to a Date object
      var lastVisitDate = new Date(lastVisit);
      
      // Get the current date
      var currentDate = new Date();
      
      // Calculate the time difference in milliseconds
      var timeDifference = currentDate - lastVisitDate;
      // Calculate the number of days
      var daysDifference = Math.floor(timeDifference / msToDays);
      if (daysDifference < 1) {
          visitsDisplay.textContent = 'Back so soon! Awesome!'
        }
        else {
            visitsDisplay.textContent = 'You last visited ' + daysDifference + ' days ago.'
        }
        
    } else {
        // If there's no stored last visit date, it's the user's first visit
        visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`
    }
}
  
  // Call the function and display the result
  daysSinceLastVisit();

  // Update the last visit date in local storage to the current date
  var currentDate = new Date();
  localStorage.setItem('lastVisit', currentDate);
  