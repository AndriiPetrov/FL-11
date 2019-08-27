let root = document.getElementById("root");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  // .then(json => console.log(json))
  .then(arrayOfPosts => {
    for (let i = 0; i < arrayOfPosts.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = JSON.stringify(arrayOfPosts[i]);

      let editButton = document.createElement('button');
      editButton.innerHTML = "edit";
      
      li.append(editButton);
      root.append(li);

      editButton.addEventListener('click', edit);
      
      console.log(arrayOfPosts[i]);
    }
  });

function edit(e) {
  let text = e.target.previousSibling;

  let li = e.target.parentElement;
  let input = document.createElement('input');
  input.innerHTML = text;
  li.replaceChild(input, text);
}