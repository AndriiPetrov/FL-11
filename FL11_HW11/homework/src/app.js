let rootNode = document.getElementById('root');

let inputText = document.getElementsByName('actionText')[0],
    // root = document.getElementById('root');
    divLi = document.createElement('div'),
    divText = document.createTextNode('');

    console.log(inputText);

    let addButton = document.getElementsByClassName('add')[0];

let testButton = document.getElementsByClassName('button')[0];


function onInput() {

    console.log(inputText.value.length);
    if (inputText.value.length > 0) {
        testButton.disabled = false;
    } else {
        testButton.disabled = true;
    }
}
    
inputText.addEventListener('input', onInput)

// divText.nodeValue = inputText;
// divLi.appendChild(divText);








// if( inputText.value.length === 0) {
//     testButton.disabled = true;
// } else {
//     testButton.disabled = false;
// }
// if (inputText.length === 0) {
//     addButton.setAttribute('disabled', 'disabled');
// } else {
//     addButton.disabled = false;
// }

function addTextToList(e) {
    e.stopPropagation();
    
    console.log(addButton);

    divText.nodeValue = inputText.value;
    divLi.appendChild(divText);
    rootNode.appendChild(divLi);

    // if (inputText.length === 0) {
    //     addButton.disabled = true;
    // } else {
    //     addButton.disabled = false;
    // }


}

addButton.addEventListener('click', addTextToList, false);