document.addEventListener('DOMContentLoaded', function() {
  // Handle comment submission confirmation
  if (window.location.hash === '#comment-submitted') {
    // Hide the comment form
    const formWrapper = document.querySelector('.comment-form-wrapper');
    if (formWrapper) {
      formWrapper.style.display = 'none';
    }
    
    // Show the confirmation message
    const confirmationDiv = document.getElementById('comment-submitted');
    if (confirmationDiv) {
      confirmationDiv.style.display = 'block';
    }
  }
  
  // Basic form validation and enhancement
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !message) {
        e.preventDefault();
        alert('Please fill in all required fields.');
        return false;
      }
    });
  }
});