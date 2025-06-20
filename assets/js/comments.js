document.addEventListener('DOMContentLoaded', function() {
  // Get form elements and controls
  const commentForm = document.getElementById('comment-form');
  const parentIdField = document.getElementById('parent-id');
  const cancelReplyButton = document.getElementById('cancel-reply');
  const formTitle = document.getElementById('comment-form-title');
  const formWrapper = document.querySelector('.comment-form-wrapper');
  const messageField = document.getElementById('message');
  
  // Handle comment submission confirmation display
  if (window.location.hash === '#comment-submitted') {
    const formWrapperElement = document.querySelector('.comment-form-wrapper');
    const confirmationDiv = document.getElementById('comment-submitted');
    
    if (formWrapperElement) {
      formWrapperElement.style.display = 'none';
    }
    
    if (confirmationDiv) {
      confirmationDiv.style.display = 'block';
    }
  }
  
  // Handle reply button interactions
  document.addEventListener('click', function(event) {
    console.log('Reply button clicked');
    if (event.target.classList.contains('reply-button')) {
      const parentId = event.target.getAttribute('data-parent-id');
      const parentAuthor = event.target.getAttribute('data-parent-author');
      console.log('Parent ID:', parentId, 'Parent Author:', parentAuthor);

      initiateReply(parentId, parentAuthor);
    }
  });
  
  // Handle cancel reply button interactions
  if (cancelReplyButton) {
    cancelReplyButton.addEventListener('click', function() {
      cancelReply();
    });
  }
  
  // Function to initiate reply workflow
  function initiateReply(parentId, parentAuthor) {
    if (!parentIdField || !formTitle || !formWrapper || !messageField) {
      return;
    }
    
    // Set parent comment identifier in hidden form field
    parentIdField.value = parentId;
    
    // Update form title to indicate reply context
    formTitle.textContent = 'Reply to ' + parentAuthor;
    
    // Display cancel reply button
    if (cancelReplyButton) {
      cancelReplyButton.style.display = 'inline-block';
    }
    
    // Remove any existing reply context indicators
    removeReplyContext();
    
    // Create and display reply context indicator
    const replyContext = document.createElement('div');
    replyContext.className = 'reply-context';
    replyContext.innerHTML = '<p class="reply-context-text">Replying to ' + parentAuthor + ' - <a href="#" onclick="cancelReply(); return false;">Cancel</a></p>';
    
    // Insert reply context before the form
    formWrapper.insertBefore(replyContext, formWrapper.querySelector('.comment-form'));
    
    // Scroll to form for user convenience
    formWrapper.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Focus message field for immediate input
    messageField.focus();
  }
  
  // Function to cancel reply workflow
  function cancelReply() {
    if (!parentIdField || !formTitle) {
      return;
    }
    
    // Clear parent comment identifier
    parentIdField.value = '';
    
    // Reset form title to default state
    formTitle.textContent = 'Leave a Comment';
    
    // Hide cancel reply button
    if (cancelReplyButton) {
      cancelReplyButton.style.display = 'none';
    }
    
    // Remove reply context indicator
    removeReplyContext();
  }
  
  // Function to remove reply context indicators
  function removeReplyContext() {
    if (!formWrapper) {
      return;
    }
    
    const existingContext = formWrapper.querySelector('.reply-context');
    if (existingContext) {
      existingContext.remove();
    }
  }
  
  // Form validation and enhancement
  if (commentForm) {
    commentForm.addEventListener('submit', function(event) {
      const nameField = document.getElementById('name');
      const messageFieldSubmit = document.getElementById('message');
      
      if (!nameField || !messageFieldSubmit) {
        return;
      }
      
      const nameValue = nameField.value.trim();
      const messageValue = messageFieldSubmit.value.trim();
      
      if (!nameValue || !messageValue) {
        event.preventDefault();
        alert('Please fill in all required fields.');
        return false;
      }
    });
  }
  
  // Make cancelReply function globally accessible for inline onclick handlers
  window.cancelReply = cancelReply;
});