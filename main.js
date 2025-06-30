// making variables for the text box and the submit button to control them
const textBox = document.querySelector("#textBox");
const submit = document.querySelector("#submitButton");

// defining a variable for the bottom rectangle to append new todos to it
const bottomRectangle = document.getElementById("bottomRectangle");

// function makes a new element with the same text in the text box 
submit.onclick = addTodo;

// submitting when focusing on the textbox and clicking enter
textBox.addEventListener("keypress", (e) => {
    if (e.key == "Enter") 
        submit.click();
});

// for saving the data in local storage we should give each todo a key 
// the counter is the key for each todo (the todo is the value) 
// and i am increasing the counter when adding a new todo
let counter = localStorage.getItem("counter") || 0;

// localStorage.clear()

// redering page on reload or when exiting the website
// this encludes rendering the last todos
for (let i= 0; i < localStorage.length; i++) 
    {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        
        if (key.startsWith("todo-")) {
            
            const newTodoCheckbox = document.createElement("input");
            newTodoCheckbox.type = "checkbox";
            
            const newTodoLabel = document.createElement("label");
            newTodoLabel.textContent = value;
            
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "X";
            
            deleteButton.onclick = () => {
            newTodoContainer.remove();
            localStorage.removeItem(newTodoContainer.dataset.key);
        }
        
        const newTodoContainer = document.createElement("div");
        
        newTodoContainer.append(newTodoCheckbox);
        newTodoContainer.append(newTodoLabel);
        newTodoContainer.append(deleteButton);
        
        newTodoContainer.dataset.key = key;
        
        bottomRectangle.append(newTodoContainer);
    }
    
}

function addTodo() {    
    
    // organize this function more
    counter++;
    localStorage.setItem("counter", counter);
    
    // creating checkbox for the new todo 
    const newTodocheckbox = document.createElement("input");
    newTodocheckbox.type = "checkbox";

    // creating a text with the same text in the input text box to put inside the newTodo element
    const newTodoLabel = document.createElement("label");
    newTodoLabel.textContent = textBox.value;
    
    
    // making a delete button for every newTodo
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X"
	
    const newTodoContainer = document.createElement("div");
    newTodoContainer.append(newTodoLabel);
    newTodoContainer.dataset.key = "todo-" + counter;

    newTodoContainer.append(newTodocheckbox);
    newTodoContainer.append(newTodoLabel);
    // Look, we should use prepend here because inside this label ther is 
    // a already a text we added above, when we want to put the checkbox inside
    // this label we want it to be before the text not after it, in the below line is why (hashtag means checkbox). 
    // before the text--->(# doing something), after text--->(doing something #).
    newTodoContainer.append(deleteButton);

    deleteButton.onclick = () => {
        newTodoContainer.remove();
        localStorage.removeItem(newTodoContainer.dataset.key);
    }
    
    // appending the new div to the bottom Rectangle
    bottomRectangle.append(newTodoContainer);   
    
    // clearing the text box
    textBox.value = "";
    
    // saving in local browser storage
    localStorage.setItem("todo-" + counter, newTodoLabel.textContent);
    
    }


function printLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(key + ":", value);
    }console.log(localStorage);  
}
// TODOs:
    // 1- allowing user to edit the newTodo he have wrote
    // 2- changing the cross button design, because it looks like putting a cross because you have not done the todEo
