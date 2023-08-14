// Get references to the left and right content elements
const leftContent = document.querySelector('.left-content');
const rightContent = document.querySelector('.right-content');

// Get references to the show buttons
const showRightBtn = document.getElementById('showRightBtn');
const showLeftBtn = document.getElementById('showLeftBtn');

// Function to handle responsive behavior
function handleResponsive() {
  if (window.innerWidth <= 767) {
    showRightBtn.style.display = 'block';
    showLeftBtn.style.display = 'none';
    leftContent.style.display = 'block';
    rightContent.style.display = 'none';
  } else {
    showRightBtn.style.display = 'none';
    showLeftBtn.style.display = 'none';
    leftContent.style.display = 'block';
    rightContent.style.display = 'block';
  }
}

// Add click event listener to the right button
showRightBtn.addEventListener('click', () => {
  leftContent.style.display = 'none';
  rightContent.style.display = 'block';
  showRightBtn.style.display = 'none'; // Hide right button
  showLeftBtn.style.display = 'block'; // Show left button
});

// Add click event listener to the left button
showLeftBtn.addEventListener('click', () => {
  rightContent.style.display = 'none';
  leftContent.style.display = 'block';
  showRightBtn.style.display = 'block'; // Show right button
  showLeftBtn.style.display = 'none'; // Hide left button
});

// Initial call to handleResponsive function
handleResponsive();

// Listen for window resize event to handle responsiveness
window.addEventListener('resize', handleResponsive);
