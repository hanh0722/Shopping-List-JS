var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.createElement("li");
function inputLength(){
    return input.value.length;
}
// function for button
function buttonList(){
    if(inputLength() > 0){
        // create <li>
        var li = document.createElement("li");
        // <li> ....... </li> Add node text with value of input we use
        li.appendChild(document.createTextNode(input.value));
        // add <li> we created in JS to <ul> HTML
        ul.appendChild(li);
        // add event for li when we click
        li.addEventListener("click", function(){
            // line - true/false
            var line = li.classList.toggle("done");
            // when toggle is true - create button
            if(line === true){
                var buttonDelete = document.createElement("button");
                buttonDelete.appendChild(document.createTextNode("delete!"));
                li.appendChild(buttonDelete);

                // when toggle is turned on - we can delete <li>
                buttonDelete.addEventListener("click", function(){
                    buttonDelete.parentElement.remove();// delete all element 
                })
            }
        });
        
        input.value = "";
    }
}
// function for keyboard
function keyboardList(event){
    if(inputLength() > 0 && event.which === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        // create event when we click li
        li.addEventListener("click", function(){
            var line = li.classList.toggle("done");
            if(line === true){
                var buttonDelete = document.createElement("button");
                buttonDelete.appendChild(document.createTextNode("delete!"));
                li.appendChild(buttonDelete);
                
                buttonDelete.addEventListener("click", function(){
                    buttonDelete.parentElement.remove();
                })
            }
        })
        input.value = "";
    }
}
// remember not to use () after function - callback function - we want the function to operate after texting 
buttonEnter.addEventListener("click", buttonList);
input.addEventListener("keypress", keyboardList);