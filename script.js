function updateText() {
    const displayText = document.getElementById('displayText');
    const currentTime = new Date();
    const dayOfWeek = currentTime.getDay(); // 0 is Sunday, 1 is Monday, ...
  
    // Check if it's within the specific timeframes to display "no"
    const currentHour = currentTime.getHours();
    if ((dayOfWeek === 2 && currentHour >= 9 && currentHour < 13) || // Tuesday: 9 AM to 1 PM
        (dayOfWeek === 4 && currentHour >= 13 && currentHour < 17)) { // Thursday: 1 PM to 5 PM
      displayText.textContent = 'Nee, ik heb nu geen weekend...';
    } else {
      displayText.textContent = 'Ja, ik heb weekend!';
    }
  }
  
  // Update the text every second (you may adjust the interval)
  setInterval(updateText, 1000);