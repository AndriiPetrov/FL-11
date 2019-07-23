const ten = 10;

let rootNode = document.getElementById('root');

let inputText = document.getElementsByName('actionText')[0];

let addButton = document.getElementsByClassName('add')[0];

function onInput() {
  if (inputText.value.length > 0) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
}

inputText.addEventListener('input', onInput)

function addTextToList() {
  if (rootNode.childElementCount < ten) {
    // e.stopPropagation();
    let divLi = document.createElement('div');
    divLi.className = 'div-li';

    let wrapperText = document.createElement('div');
    wrapperText.className = 'div-text';

    let divText = document.createTextNode(inputText.value);


    let check_box_outline_blank = document.createElement('button');
    check_box_outline_blank.className = 'material-icons checkbox ';
    check_box_outline_blank.innerText = 'check_box_outline_blank';

    let editIcon = document.createElement('button');
    editIcon.className = 'material-icons edit-icon color-icons';
    editIcon.innerText = 'edit';

    let deleteIcon = document.createElement('button');
    deleteIcon.className = 'material-icons delete-icon color-icons';
    deleteIcon.innerHTML = 'delete';

    wrapperText.appendChild(divText);
    divLi.appendChild(check_box_outline_blank);
    divLi.appendChild(wrapperText);
    divLi.appendChild(editIcon);
    divLi.appendChild(deleteIcon);
    rootNode.appendChild(divLi);

    editIcon.addEventListener('click', edit);
    check_box_outline_blank.addEventListener('click', checked, {
      capture: false,
      once: true
    });
    deleteIcon.addEventListener('click', remove);
    // // editIcon.addEventListener('click', remove);

    // let checkboxes = document.getElementsByClassName('checkbox');
    // let deleteIcons = document.getElementsByClassName('delete-icon');
    // let editIcons = document.getElementsByClassName('edit-icon');

    // for (let i = 0; i < checkboxes.length; i++) {

    //   checkboxes[i].addEventListener('click', checked, {
    //     capture: false,
    //     once: true
    //   })

    //   editIcons[i].addEventListener('click', edit);

    //   deleteIcons[i].addEventListener('click', remove);

    // }
  } else if (rootNode.childElementCount === ten) {
    addButton.disabled = true;
    inputText.disabled = true;
    document.getElementsByClassName('show-if-ten')[0].style.display = 'block';
  }
}

addButton.addEventListener('click', addTextToList, false);

function checked(event) {
  event.target.className = 'material-icons checkedbox color-icons';
  event.target.innerHTML = 'check_box';
}

function remove(event) {
  rootNode.removeChild(event.target.parentNode);
  if (rootNode.childElementCount < ten) {
    addButton.disabled = false;
    inputText.disabled = false;
    document.getElementsByClassName('show-if-ten')[0].style.display = 'none';
  }
}

function edit(event) {
  let input = document.createElement('input');
  input.className = 'input-for-saving';

  let save = document.createElement('button');
  save.className = 'material-icons save-icon color-icons';
  save.innerHTML = 'save';

  let divEl = document.createElement('div');
  divEl.className = 'div-wrapper-for-saving'

  divEl.appendChild(input);
  divEl.appendChild(save);

  rootNode.replaceChild(divEl, event.target.parentNode);

  save.addEventListener('click', saveTextToList);
  console.log(event.target);
  console.log(event.target.parentNode);
}

function saveTextToList(event) {
  let divLi = document.createElement('div');
  divLi.className = 'div-li';

  let wrapperText = document.createElement('div');
  wrapperText.className = 'div-text';

  let divText = document.createTextNode(event.target.parentNode.firstElementChild.value);

  let check_box_outline_blank = document.createElement('button');
  check_box_outline_blank.className = 'material-icons checkbox ';
  check_box_outline_blank.innerText = 'check_box_outline_blank';

  let editIcon = document.createElement('button');
  editIcon.className = 'material-icons edit-icon color-icons';
  editIcon.innerText = 'edit';

  let deleteIcon = document.createElement('button');
  deleteIcon.className = 'material-icons delete-icon color-icons';
  deleteIcon.innerHTML = 'delete';

  wrapperText.appendChild(divText);
  divLi.appendChild(check_box_outline_blank);
  divLi.appendChild(wrapperText);
  divLi.appendChild(editIcon);
  divLi.appendChild(deleteIcon);
  rootNode.replaceChild(divLi, event.target.parentNode);

  editIcon.addEventListener('click', edit);
  check_box_outline_blank.addEventListener('click', checked, {
    capture: false,
    once: true
  });
  deleteIcon.addEventListener('click', remove);
}
