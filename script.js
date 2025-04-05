// JavaScript to handle the surprise button click
document.getElementById('surprise-btn').addEventListener('click', function() {
    const surpriseBox = document.getElementById('surprise-box');
    
    // Toggle visibility of the surprise box
    surpriseBox.classList.toggle('hidden');
    
    // Change button text based on visibility
    if (!surpriseBox.classList.contains('hidden')) {
        this.textContent = 'Hide Surprise';
    } else {
        this.textContent = 'Click for a Surprise!';
    }
});
