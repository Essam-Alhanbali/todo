// making variables for the text box and the submit button to control them
const textBox = document.querySelector("#textBox");
const submit = document.querySelector("#submitButton");

// defining a variable for the bottom rectangle to append new todos to it
const bottomRectangle = document.getElementById("bottomRectangle");

// function makes a new element with the same text in the text box 
submit.onclick = test;
textBox.addEventListener("keypress", (e) => {
    if (e.key == "Enter") 
        submit.click();
});

function test() {    
    // organize this function more
    // creating new element
    
    
    const newTodo = document.createElement("input");
    newTodo.type = "checkbox";

    // creating a text with the same text in the input text box to put inside the newTodo element
    const newTodoLabel = document.createElement("label");
    newTodoLabel.textContent = textBox.value;

    // Look, we should use prepend here because inside this label ther is 
    // a already a text we added above, when we want to put the checkbox inside
    // this label we want it to be before the text not after it, in the below line is why (hashtag means checkbox). 
    // before the text--->(# doing something), after text--->(doing something #).
    newTodoLabel.prepend(newTodo);
    
    // making a delete button for every newTodo
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    newTodoLabel.append(deleteButton);
	
    const newTodoContainer = document.createElement("div");
    newTodoContainer.append(newTodoLabel);

    deleteButton.onclick = function ()=> {newTodoLabel.remove()}

    // appending the new div to the bottom Rectangle
    bottomRectangle.append(newTodoContainer);   

    // clearing the text box
    textBox.value = "";
}


// TODOs:
    // 1- allowing user to edit the newTodo he have wrote
    // 2- changing the cross button design, because it looks like putting a cross because you have not done the todEo
