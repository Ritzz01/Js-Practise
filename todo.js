let displat = document.getElementById("result");

let text = document.getElementById("text");

let add = document.getElementById("add");

let remove = document.getElementById("remove");

let todo = [];

function displayText(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += `<li>${arr[i]} </li>`;
  }
  displat.innerHTML = res;
}


add.addEventListener("click", () => {
  let value = text.value;

  if (value ) {
    todo.push(value);
    displayText(todo);
  }
});

remove.addEventListener("click", () => {
    if (todo.length > 0) {
        todo.pop(); 
        displayText(todo);
    }
});


