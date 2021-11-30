const inputField = document.querySelector('#input-text');
const button = document.querySelector('button')
const list = document.querySelector('.todo-list')

button.addEventListener('click', addTodo);
list.addEventListener('click',handleDelete)
list.addEventListener('click',handleCheck)
list.addEventListener('click',handleEdit)

let i = 0;
let listTodos = [];

function addTodo(e) {
  e.preventDefault();
	console.log('click happened')
	listTodos.push(inputField.value)

  if (inputField.value === "") {
    alert("Please enter some value");
  } else {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
		todoItem.id = `i`
		
		const checkboxBtn = document.createElement('input')
		checkboxBtn.type="checkbox"
		checkboxBtn.id = 'checkboxBtn'
		todoItem.appendChild(checkboxBtn)

		const todoText = document.createElement('span')
		todoText.innerText = inputField.value;
		todoText.classList.add('todoText')
		todoItem.appendChild(todoText)

		const editBtn = document.createElement('button')
		editBtn.innerText = 'Edit';
		editBtn.classList.add("editBtn")
		todoItem.appendChild(editBtn)

		const delBtn = document.createElement('button')
		delBtn.innerText = 'Delete';
		delBtn.classList.add("deleteBtn")
		todoItem.appendChild(delBtn)

		list.appendChild(todoItem)
  }
}

function handleDelete(e){
	const todoClicked = e.target;
	e.preventDefault();
	if (todoClicked.classList[0] === "deleteBtn") {
    const todo = todoClicked.parentElement;
		list.removeChild(todo)
  }
}

function handleCheck(e){
	const todoClicked = e.target;
	// e.preventDefault();
	if (todoClicked.id === "checkboxBtn") {
    const todo = todoClicked.parentElement;
		console.log("this is todo", todo)
    todo.children[1].classList.toggle("completed");
		if(todo.children[1].classList[0]==='completed'){
			todo.children[2].disabled=true;
			console.log(todo.children[0].disabled)
		}
		else{
			todo.children[2].disabled=false;
		}
  }
}

function handleEdit(e){
	const todoClicked = e.target;
	// e.preventDefault();
	if (todoClicked.classList[0] === "editBtn") {
    console.log("Edit works")
  }
}