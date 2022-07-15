// Receives all the selectors
let elements = document.getElementsByName('cssProperty');

// Receives the place that needs to be change
let div = document.getElementById('modify');

function set() {

    for (let index = 0; index < elements.length; index++ ) 
    {
        // Receives each ID attribute
        let cssProperty =  elements[index].getAttribute('id');

        // Receives each value from select
        let cssValue = elements[index].value;


        // Set new value
        div.style[ cssProperty ] =  cssValue;
    }
}

// Event Handler
document.getElementById('set').addEventListener('click', set);