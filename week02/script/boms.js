const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent =input.value;
deleteButton.textContent = '❌';
li.appendChild(deleteButton);
list.appendChild(li);

button.addEventListener('click', function(){
    if (input.value.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = input.value; // Set the text of the list item

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Set the text of the delete button

        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); // Remove the list item
            input.focus(); // Set focus back to the input field
        });

        // Append the delete button to the list item
        li.appendChild(deleteButton);
        // Append the list item to the list
        list.appendChild(li);

        // Clear the input field and focus on it
        input.value = '';
        input.focus();
    } else {
        // If the input is empty, alert the user
        alert('Please enter a chapter name.');
        input.focus(); // Set focus back to the input field
    }
});