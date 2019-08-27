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
      
      // console.log(arrayOfPosts[i]);
    }
  });

function edit(e) {
  let text = e.target.previousSibling;

  let li = e.target.parentElement;
  let input = document.createElement('input');
  input.innerHTML = text;
  li.replaceChild(input, text);

  console.log(e.target);
  e.target.addEventListener('click', save);
}

function save(e) {
  console.log(e.target);
  console.log(e.target.previousSibling.innerHTML);
  let input = e.target.previousSibling;

}


fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})