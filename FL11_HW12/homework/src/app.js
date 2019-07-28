const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

// Your code goes here

rootNode.className = 'rootNode';

// Main page
let h1Elem = document.createElement('h1');
let h1TextNode = document.createTextNode('Simple TODO application')
h1Elem.appendChild(h1TextNode);
// h1Elem.innerHTML = 'Simple TODO application';


let butElem = document.createElement('button');
butElem.innerText = 'Add new task';
butElem.className = 'add-new-task-button';

let pEl = document.createElement('p');
pEl.className = 'pEl';
pEl.innerHTML = 'TODO is empty';

// let docFragStart = document.createDocumentFragment();

// docFragStart.appendChild(h1Elem);
// docFragStart.appendChild(butElem);
// docFragStart.appendChild(pEl);

let divStart = document.createElement('div');

divStart.appendChild(h1Elem);
divStart.appendChild(butElem);
divStart.appendChild(pEl);

rootNode.appendChild(divStart);

function addNewTask() {
  console.log('clicked');
  location.hash = '#add';

  let h1Elem = document.createElement('h1');
  h1Elem.innerHTML = 'Add task';

  let input = document.createElement('input');
  input.className = 'input-for-add';

  input.addEventListener('input', onInput);
  
  let buttonCancel = document.createElement('button');
  buttonCancel.innerHTML = 'Cancel';
  buttonCancel.className = 'cancel-button';

  let buttonSaveChanges = document.createElement('button');
  buttonSaveChanges.innerHTML = 'Save changes';
  buttonSaveChanges.className = 'save-button';


  let divForButtons = document.createElement('div');
  divForButtons.className = 'div-for-buttons';

  divForButtons.appendChild(buttonCancel);
  divForButtons.appendChild(buttonSaveChanges);

  let divForRoot = document.createElement('div');

  divForRoot.appendChild(h1Elem);
  divForRoot.appendChild(input);
  divForRoot.appendChild(divForButtons);
  
  rootNode.replaceChild(divForRoot, divStart);
  
  buttonSaveChanges.addEventListener('click', SaveChanges);
}

butElem.addEventListener('click', addNewTask);

function onInput(e) {
  console.log(e.target.nextSibling.children[1]);
  if (e.target.value.length > 0) {
  e.target.nextSibling.children[1].disabled = false;
  } else {
  e.target.nextSibling.children[1].disabled = true;
  }
}
  
  

function SaveChanges(e) {
  console.log(e.target.parentNode.parentNode);
  
  let inputTextValue = document.createTextNode(e.target.parentNode.previousSibling.value);
  
  let divForEl = document.createElement('div');

  let todoButton = document.createElement('button');
  todoButton.className = 'todoButton';

  let imageForTodo = document.createElement('img');
  imageForTodo.setAttribute('src', '../assets/img/done-s.png');

  todoButton.appendChild(imageForTodo);

  let removeButton = document.createElement('button');
  removeButton.className = 'removeButton';

  let imageForRemove = document.createElement('img');
  imageForRemove.setAttribute('src', '../assets/img/remove-s.jpg');
  
  removeButton.appendChild(imageForTodo);

  divForEl.appendChild(todoButton);
  divForEl.appendChild(inputTextValue);
  divForEl.appendChild(removeButton);

  location.href = '';

  // setTimeout(rootNode.replaceChild(divForEl, divStart), 2000);
  // rootNode.replaceChild(divForEl, e.target.parentNode.parentNode);

  
}



// rootNode.appendChild(/* Append your list item node*/);
