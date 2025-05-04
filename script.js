// Get references to the textarea and button
const storyBox = document.getElementById('storyBox');
const saveButton = document.getElementById('saveButton');

// Load saved text (if any)
const savedStory = localStorage.getItem('myStory');
if (savedStory) {
  storyBox.value = savedStory;
}

// When the button is clicked, save the text
saveButton.addEventListener('click', () => {
  localStorage.setItem('myStory', storyBox.value);
  alert('Your story has been saved!');
});
