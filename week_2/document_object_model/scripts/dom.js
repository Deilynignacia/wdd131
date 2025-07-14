// Reference DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener
button.addEventListener('click', function () {

  // Check if the input is not empty
  if (input.value.trim() !== '') {

    // Create a new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set the list item's text to the input value
    li.textContent = input.value;

    // Set the delete button's text and accessibility label
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Add a click event to remove the list item
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Append the delete button
    li.append(deleteButton);
    
    // Append the list item
    list.append(li);

    // Clear the input
    input.value = '';

  } else {
    // If input is empty, do nothing and return focus
    input.focus();
  }
});
