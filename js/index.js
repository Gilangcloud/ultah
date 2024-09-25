// Set the birthday date
const birthday = new Date('2024-09-26T00:00:00'); // Set the target date to September 26, 2025

// Update the countdown every second
setInterval(() => {
  const now = new Date();
  const diff = birthday - now;

  if (diff < 0) {
    // If the birthday has already passed, set the countdown text to "00:00:00"
    document.getElementById('countdown').innerHTML = '00:00:00';
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }

  // Check if the countdown has finished
  if (diff <= 0) {
    // Show the button
    document.getElementById('countdown-button').style.display = 'block';
    console.log("Countdown finished! Button should be visible now.");
    // Set the countdown text to 00:00:00
    document.getElementById('countdown').innerHTML = '00:00:00';

    // Add event listener to the button
    document.getElementById('countdown-button').addEventListener('click', () => {
      window.location.href = 'main.html';
    });
  }
}, 1000);