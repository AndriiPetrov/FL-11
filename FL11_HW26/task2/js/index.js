const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $remove = $(".item-remove");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];


$add.click(function(e) {
  $list.append(`<li class='item'>
    <span class='item-text'>${$input.val()}</span>
    <button class="item-remove">Remove</button>
  </li>`)
  e.preventDefault();
});

$("document").ready(
  function() {
    $remove.click(function(e) {
      console.log();
      $(e.target.parentElement).remove()
      e.preventDefault();
    })
  }
)
